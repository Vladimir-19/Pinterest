Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update] 
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:create, :show, :index, :update, :destroy] 
    resources :boards, only: [:create, :show, :index, :update, :destroy] 
    resources :joinboardspins, only: [:create, :index, :destroy]
  end

  root to: "static_pages#root"
end

# HOMEWORK 
# DO CHECK IF IN PAANTER EDIT BOARD IN USER PANALE IS THE SAME AS ESDIT IN THE 
# BOARD SHOW