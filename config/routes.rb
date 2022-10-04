 # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
Rails.application.routes.draw do
  resources :posts
  resources :reviews
  resources :booked_lessons
  resources :lessons
  resources :comments
  resources :coaches do
    resources :lessons, only: [:index]
  end
  resources :users do
    resources :posts, only: [:index]
    resources :booked_lessons, only: [:index, :show, :destroy]
  end
end
