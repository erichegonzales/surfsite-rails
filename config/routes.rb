Rails.application.routes.draw do
  resources :reviews
  resources :booked_lessons
  resources :lessons
  resources :comments
  resources :coaches
  resources :users do
    resources :posts, controller: 'user_posts'
  end
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
