Rails.application.routes.draw do
  resources :reviews
  resources :booked_lessons
  resources :lessons
  resources :comments
  resources :posts
  resources :coaches
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
