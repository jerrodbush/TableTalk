Rails.application.routes.draw do
  resources :members
  resources :interests
  resources :reservations
  resources :users
  resources :comments
  resources :ratings
  resources :cuisines
  resources :restaurants
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
  resources :members
    get '/restaurants/:id/reservations', to: 'rest_reservations#reservations'
  end
  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
