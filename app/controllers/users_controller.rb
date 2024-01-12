class UsersController < ApplicationController
  before_action :check_owner_website

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      UserWebsiteRole.create! user_id: @user.id, website_id: params[:website_id]
      redirect_to website_users_path(website_id: params[:website_id])
    else
      render :new
    end
  end

  def index
    user_ids = UserWebsiteRole.where(website_id: params[:website_id]).pluck(:user_id)
    @users = User.where(id: user_ids)
  end

  def destroy
    @user = User.find_by(website_id: params[:website_id], id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit :email, :password
  end

  def check_owner_website
    unless current_user && current_user.is_owner_website?(params[:website_id])
      redirect_to root_path
    end
  end
end
