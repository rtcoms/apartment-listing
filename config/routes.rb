Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :apartments, only: [:index]
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
