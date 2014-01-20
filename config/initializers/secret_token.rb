# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

if ENV['SECRET_TOKEN'].present?
     GameTableServer::Application.config.secret_token = ENV['SECRET_TOKEN']
elsif %w(development test).include?(Rails.env) || ENV['RAILS_GROUPS'] == 'assets'
   GameTableServer::Application.config.secret_token = ('x' * 30) # meets minimum requirement of 30 chars long
elsif !GameTableServer::Application.config.secret_token
   raise <<-ERROR

   No secret token found - rails applications need this for security reasons.

   If you are deploying via capistrano, please ensure that your `config/deploy.rb` contains
   the new `errbit:setup_configs` and `errbit:symlink_configs` tasks from `config/deploy.example.rb`.
   Next time you deploy, your secret token will be automatically generated.

   If you are deploying to Heroku, please run the following command to set your secret token:
   heroku config:add SECRET_TOKEN="$(bundle exec rake secret)"

   If you are deploying in some other way, please run the following command to generate a new secret token,
   and commit the new `config/initializers/__secret_token.rb`:

   echo "GameTableServer::Application.config.secret_token = '$(bundle exec rake secret)'" > config/initializers/__secret_token.rb
   ERROR
end

