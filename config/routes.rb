Rails.application.routes.draw do
  resources :posts
  resources :reviews
  resources :booked_lessons
  resources :lessons
  resources :comments
  resources :coaches do
    resources :lessons, controller: 'coach_lessons'
  end
  resources :users do
    resources :posts, controller: 'user_posts'
    resources :booked_lessons, controller: 'user_booked_lessons'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
