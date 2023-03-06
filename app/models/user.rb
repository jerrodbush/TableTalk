class User < ApplicationRecord
  has_many :reservations
  # has_many :reservations, through: :members
  has_many :restaurants, through: :reservations
  has_many :interests, through: :reservations
  has_many :comments, through: :reservations
  has_many :ratings
  has_many :members, through: :reservations
  has_many :members

  validates :first_name, presence: { message: "Please add a first name" }
  validates :last_name, presence: { message: "Please add a last name" }
  validates :password, presence: true, length: { minimum: 8 } #, format: { with: /\d/, message: "must contain at least one digit" }
  validates :age, inclusion: { in: 18..100, message: "Your age must be between 18 and 99 years old" }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
  validates :phone, format: { with: /\A\+?\d{1,3}[-.\s]?\d{1,10}\z/, message: "must be a valid phone number" }
  validates :location, presence: { message: "Please enter your city or town name" }

  def full_name
    "#{first_name} #{last_name}"
  end
end
