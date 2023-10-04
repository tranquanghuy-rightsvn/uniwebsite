class ProductsController < ApplicationController
  before_action :check_manage_website

  def new
    # Edit when has multi website

    @product = Product::ChaosNews.new

  end

  def create
    @product = Product::ChaosNews.new product_params.merge(website_id: params[:website_id])
    if @product.save
      redirect_to website_products_path(website_id: params[:website_id])
    else
      render :new
    end
  end

  def index
    @products = Product::ChaosNews.where(website_id: params[:website_id])
  end

  def show
    @product = Product::ChaosNews.find_by(website_id: params[:website_id], product_id: params[:id])
  end

  private

  def product_params
    params.require(:product_chaos_news).permit :title, :description, :content, :image, :url
  end

  def check_manage_website
    unless current_user && current_user.can_manage_website?(params[:website_id])
      redirect_to root_path
    end
  end
end
