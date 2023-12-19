class ProductsController < ApplicationController
  before_action :check_manage_website
  before_action :get_model


  def new
    @product = @model.new

  end

  def create
    @product = @model.new product_params.merge(website_id: params[:website_id])
    if @product.save
      redirect_to website_products_path(website_id: params[:website_id])
    else
      render :new
    end
  end

  def index
    @products = @model.where(website_id: params[:website_id])
  end

  def show
    @product = @model.find_by(website_id: params[:website_id], id: params[:id])
  end

  def edit
    @product = @model.find_by(website_id: params[:website_id], id: params[:id])
  end

  def update
    @product = @model.find_by(website_id: params[:website_id], id: params[:id])

    if @product.update product_update_params
      redirect_to website_products_path(website_id: params[:website_id])
    else
      render :edit
    end
  end

  private

  def product_params
    params.require("product_#{@brief}".to_sym).permit :title, :description, :content, :image, :url, :content_copied, :keywords
  end

  def check_manage_website
    unless current_user && current_user.can_manage_website?(params[:website_id])
      redirect_to root_path
    end
  end

  def product_update_params
    params.require("#{@brief}".to_sym).permit :title, :description, :content, :image, :content_copied, :keywords
  end

  def get_model
    website = Website.find(params[:website_id])
    @brief = website.brief
    @model = "Product::#{@brief.split('_').map(&:capitalize).join}".constantize
  end
end
