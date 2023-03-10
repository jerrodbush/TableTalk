class User < ApplicationRecord
  has_secure_password
  has_many :reservations
  # has_many :reservations, through: :members
  has_many :restaurants, through: :reservations
  has_many :interests, through: :reservations
  has_many :comments, through: :reservations
  has_many :ratings
  has_many :members, through: :reservations
  has_many :members

    # ADD VALIDATION FOR USER_IMAGE???
  validates :first_name, presence: { message: "Please add a first name" }
  validates :last_name, presence: { message: "Please add a last name" }
  validates :username, presence: { message: "Please add a username" }, uniqueness: { message: "This username has already been taken."}
  validates :password, presence: true, length: { minimum: 8 }
  validates :age, inclusion: { in: 18..100, message: "Your age must be between 18 and 100 years old" }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
  validates :phone, format: { with: /\A\+?\d{1,3}[-.\s]?\d{1,10}\z/, message: "must be a valid phone number" }
  validates :location, presence: { message: "Please enter your city or town name" }

  def full_name
    "#{first_name} #{last_name}"
  end
end
