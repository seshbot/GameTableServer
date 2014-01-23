class UsersController < ApplicationController
   before_filter :ensure_authenticated_user, only: [:index, :show, :destroy]
   before_filter :ensure_admin_user, only: [:index]

   respond_to :json

   # Returns list of users. This requires authorization
   def index
      respond_with User.all
   end

   def show
      respond_with User.find(params[:id])
   end

   def create
      # respond_with User.create(user_params)
      user = User.create(user_params)
      if user.new_record?
         render json: { errors: user.errors.messages }, status: 422
      else
         render json: user.session_api_key, status: 201
      end
   end

   def destroy
      respond_with User.destroy(params[:id])
   end

   private

   # Strong Parameters (Rails 4)
   def user_params
      params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
   end
end
