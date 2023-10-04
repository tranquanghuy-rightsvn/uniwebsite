class HomeController < ApplicationController
  before_action :check_login?

  def index
    @websites = current_user.websites
  end

  private

  def check_login?
    redirect_to(new_user_session_path) unless current_user
  end
end
