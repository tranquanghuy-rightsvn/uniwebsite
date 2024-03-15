
require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Uniwebsite
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    config.to_prepare do
      # Load application's model / class decorators
      Dir.glob(File.join(File.dirname(__FILE__), "../app/**/*_decorator*.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end
    decorators = "#{Rails.root}/app/decorators"
    Rails.autoloaders.main.ignore(decorators)

    config.to_prepare do
      Dir.glob(Rails.root.join 'app/decorators/**/*_decorator.rb') do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

    config.to_prepare do
      Dir.glob(Rails.root.join 'app/services/**/*_service.rb') do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

    # config.autoload_paths += %W(#{config.root}/lib/modules)

    config.autoload_paths += %W(#{config.root}/app/services/chaos_news)
    config.autoload_paths += %W(#{config.root}/app/services/zreview)

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end
  end
end
