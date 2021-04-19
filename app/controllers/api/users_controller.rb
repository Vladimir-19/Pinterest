class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = selected_user
    if @user
      render json: {
        user: @user
      }
    else 
      render json: {
        status: 500,
        errors: ['user not found']
      }
    end
  end

  def edit
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def update
    @user = User.find(params[:id])

      if @user.update(profile_params)
        render "api/users/show"
      else 
        render json: @user.errors.full_messages, status: 422
      end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :age)
  end

  def profile_params
    params.require(:user).permit( :email, :first_name, :last_name, :age, :photo, :location, :description)
  end

    def selected_user
    User.includes(:boards, :pins, :boards_pins).find(params[:id])
  end

end