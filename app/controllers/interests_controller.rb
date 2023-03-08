class InterestsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :interest_not_found
  def index
    render json: Interest.all(), status: :ok
  end

  def show
    myInterest = Interest.find(params[:id])
    render json: myInterest, status: :ok
  end

  def all
    my_interests = [
      "Sports",
      "Politics",
      "Movies",
      "Tennis",
      "NFL",
      "Soccer",
      "F1 Racing",
      "Sci-Fi Movies",
      "Books",
      "Star Trek 2: Wrath of Khan",
      "Harry Potter",
      "Zombies",
      "Knitting",
      "The Last of Us",
      "The Lord of the Rings",
      "Cooking",
      "Biking",
      "The Outdoors",
      "Python",
      "Nicholas Cage",
      "Traveling",
      "Mixology",
      "Baking",
      "Gardening",
      "Pets",
      "Cats",
      "Dogs",
      "Beaches",
      "Wine",
      "Economics",
      "Biological Aging",
      "Podcasts",
      "Cannibis",
      "Hats",
      "Plumbus",
      "Environment",
      "Comedy",
      "Music",
      "Taylor Swift",
      "Greatest Album of All Time"
    ]
    render json: my_interests, status: :ok
  end

  private

  def interest_not_found
    render json: {error: "Interest not found"}, status: :not_found
  end
end
