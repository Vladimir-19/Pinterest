class User < ApplicationRecord

    validates :email, :age, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    # validates :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :photo
    has_many :boards

    has_many :pins, 
        through: :boards,
        source: :pins
    
    has_many :own_pins,
        foreign_key: :user_id,
        class_name: :Pin,
        dependent: :destroy

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

end