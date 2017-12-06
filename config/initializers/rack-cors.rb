if defined? Rack::Cors
  Rails.configuration.middleware.insert_before 0, Rack::Cors do
    allow do
      origins %w[
        http://rails5-heroku.herokuapp.com/
        https://rails5-heroku.herokuapp.com/
      ]
      resource '/assets/*'
    end
  end
end