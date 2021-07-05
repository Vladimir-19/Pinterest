# README

# [Clone Pinterest](https://clone-pinterest.herokuapp.com/#/) 
Pinterest is a social media application for inspiration based on image sharing. [Pinterest](https://www.pinterest.com/) designed to enable user to discover information and ideas on the internet using images.

Clone Pinterest is built on a Ruby on Rails backend, utilizing PostgreSQL and AWS S3 for data storage. React and Redux are the main libraries used for the frontend, along with HTML and CSS, with Heroku used for app deployment.

<p align='center'>
    <img src='./app/assets/images/clonePinterest.jpg' height='500'>
</p>
                
## Features
* User Authentication built using backend Rails validations with regex and secure BCrypt password hashing
* Logged in users can complete full CRUD cycle and save other users' Pins
* Optimized minimal server load with cloud-based image storage via Rails ActiveStorage and Amazon Web Services S3

## Authentication 
A tough challenge was implementing ability for logged in Useer to view a list of Pins and create and update Pins, but if a user is not logged in they will be taken to the Sign In page. As part fo this chalenge my goal was not to store passwords in DB. 
Insted of storing a password I hashed it and then store only it's hash value.
To avoid hash collision I was using cryptographic hashing function BCrypt (Blowfish). Another reason to use bcrypt-ruby was that it's automatically handles the storage and generation of salts. 

<details>
  <summary>Click to expand code snippet</summary>
  
  ```ruby
  def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
  ```
</details>

## Technologies Used:
* Ruby on Rails
* JBuilder
* JavaScript
* React.js
* Redux.js
* HTML/CSS
* PostgreSQL
* Amazon Web Services (AWS S3)
* Heroku

## Additional Resources
* <a href="https://github.com/Vladimir-19/Pinterest/blob/main/db/schema.rb">Schema</a>
* <a href="https://github.com/Vladimir-19/Pinterest/blob/main/db/seeds.rb">Seeds</a>
* <a href="https://github.com/Vladimir-19/Pinterest/blob/main/config/routes.rb">Backend routes</a>

## Future Plans
* Follows
* Comments
* Tags
* Notifications

