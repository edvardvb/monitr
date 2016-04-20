Rails.application.routes.draw do

  get 'status/post'

  get 'pages/index'

  get 'pages/home'

  get 'pages/about'

  post 'pages/heater' => 'pages#toggle_heater'
  get 'pages/heater' => 'pages#update_heater'

  post 'pages/power' => 'pages#toggle_power'
  get 'pages/power' => 'pages#update_power'

  post 'pages/lock' => 'pages#toggle_lock'
  get 'pages/lock' => 'pages#update_lock'

  post 'status' => 'status#recieve_post'


  get 'pages/timestamp' => 'pages#update_timestamp'
  get 'pages/speed' => 'pages#update_speed'
  get 'pages/engine_rpm' => 'pages#update_engine_rpm'
  get 'pages/maps' => 'pages#update_maps'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'pages#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
