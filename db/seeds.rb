require 'faker'

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

my_dates = [
    "03-09-23",
    "03-10-23",
    "03-11-23",
    "03-12-23",
    "03-13-23"
]

my_check = [
    "I pay",
    "You pay",
    "We pay",
]

my_cuisines = [
    "New American",
    "American",
    "Italian",
    "Mexican",
    "Middle Eastern",
    "Chinese",
    "Greek",
    "Japanese",
    "Pub Fare",
    "Pizza"
]

puts 'deleting users/restaurants/reservations/discussions/ratings ❌'
User.destroy_all
Restaurant.destroy_all
Reservation.destroy_all
Interest.destroy_all
Rating.destroy_all
puts 'seeding fresh data'

puts 'seeding 300 users 👤'
300.times do User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.safe_email,
    phone: Faker::PhoneNumber.cell_phone,
    age: Faker::Number.within(range: 18..100),
    location: "Nashville",
    username: Faker::Internet.username,
    password: Faker::Internet.password(min_length: 8),
    user_image: Faker::Avatar.image
)
end
puts 'done seeding users 👤'

puts 'seeding 30 restaurants 🍽️'
Restaurant.create(
    name: "5th and Taylor",
    phone: "615-242-4747",
    address: "1411 5th Ave N, Nashville, TN 37208",
    price: "$$$",
    website: "http://5thandtaylor.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/554980e9e4b0278520c6c43c/1453326177044-98UAYQPF8LKA6DBLQ9MM/5th+%26+Taylor+dining+room+-+smaller+file.jpg?format=2500w",
    open_time: Faker::Number.within(range: 5..7),
close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.797501,
    latitude: 36.187881
)
Restaurant.create(
    name: "Adele's",
    phone: "615-988-9700",
    address: "1210 McGavock St, Nashville, TN 37203",
    price: "$$$",
    website: "https://adelesnashville.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNscIhfNiM0PrdR6Oma6l04wprYomyoyy8XjINq=s1360-w1360-h1020",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.787552,
    latitude: 36.155560
)
Restaurant.create(
    name: "City House",
    phone: "615-736-5838",
    address: "1222 4th Ave N, Nashville, TN 37208",
    price: "$$",
    website: "https://cityhousenashville.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipM6X8HeTtYi2DmA2qghdSZspsbJWMSbi4dS4siT=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.787109,
    latitude: 36.176971
)
Restaurant.create(
    name: "Earnest Bar & Hideaway",
    phone: "615-915-1715",
    address: "438 Houston St #160, Nashville, TN 37203",
    price: "$$",
    website: "https://www.earnestbarandhideaway.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/5d9516280c5b607d9c8aa0d7/1570096242696-PF4MMDJX1D640WV5E1SN/foodFish_1.jpg?format=750w",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.767357,
    latitude: 36.143360
)
Restaurant.create(
    name: "FOLK",
    phone: "615-610-2595",
    address: "823 Meridian St, Nashville, TN 37207",
    price: "$$",
    website: "https://www.goodasfolk.com/",
    rest_image: "https://cdn.vox-cdn.com/thumbor/khYijr6sTI-UXDDjOQvf6zmEBmY=/0x0:5757x3838/1200x675/filters:focal(2419x1459:3339x2379)/cdn.vox-cdn.com/uploads/chorus_image/image/59485009/Folk_4.0.jpg",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.767967,
    latitude: 36.185558
)
Restaurant.create(
    name: "Geist Bar + Restaurant",
    phone: "615-920-5440",
    address: "311 Jefferson St, Nashville, TN 37208",
    price: "$$$",
    website: "https://www.geistnashville.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/5a3831a5bff200aa91b706ce/1547247703861-FQ9183SNGGEM9566BSUS/_MG_2524.jpg?format=2500w",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.785516,
    latitude: 36.174722
)
Restaurant.create(
    name: "Germantown Cafe",
    phone: "615-242-3226",
    address: "1200 5th Ave N, Nashville, TN 37208",
    price: "$$",
    website: "https://germantowncafe.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNBdYQXZtdlfDuY1vmu74dVrYGd8T1ppzmzNxNf=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.787887,
    latitude: 36.175515
)
Restaurant.create(
    name: "Henrietta Red",
    phone: "615-490-8042",
    address: "1200 4th Ave N, Nashville, TN 37208",
    price: "$$$",
    website: "https://www.henriettared.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipPt8tx4DN4OL6fWm-dmtX0sONc3gAL_jIzyCUrb=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.78672,
    latitude: 36.17605
)
Restaurant.create(
    name: "HUSK",
    phone: "615-256-6565",
    address: "37 Rutledge St, Nashville, TN 37210",
    price: "$$$",
    website: "https://husknashville.com/",
    rest_image: "https://husknashville.com/wp-content/uploads/2022/09/our-food-new.jpg",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.769884,
    latitude: 36.155393
)
Restaurant.create(
    name: "Josephine",
    phone: "615-292-7766",
    address: "2316 12th Ave S, Nashville, TN 37204",
    price: "$$$",
    website: "https://www.josephineon12th.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipPUDJU7BY423QXuXASiwCqM-Okd3v3t990MfHq2=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.789059,
    latitude: 36.127323
)
Restaurant.create(
    name: "Lockeland Table",
    phone: "615-228-4864",
    address: "1520 Woodland St, Nashville, TN 37206",
    price: "$$$",
    website: "https://www.lockelandtable.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipPFSlHPrLHaNl9PAKL-3_F-OVkGsu-TYo5vobUb=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.743276,
    latitude: 36.176914
)
Restaurant.create(
    name: "Lyra",
    phone: "615-928-80400",
    address: "935 W Eastland Ave, Nashville, TN 37206",
    price: "$$",
    website: "https://lyranashville.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/59f66d4b1f318df8e715df92/1540564614365-17PAZF901ZY10PF6ISNK/08bm1FA4Q6aa9PwCeogkNg.jpg?format=500w",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7542282,
    latitude: 36.1845051
)
Restaurant.create(
    name: "Margot Cafe & Bar",
    phone: "615-277-4668",
    address: "1017 Woodland St, Nashville, TN 37206",
    price: "$$$",
    website: "https://margotcafe.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipMHzocxDLVaLSON74AlzNswHtlfYvdKJv5uM0Oe=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7512411,
    latitude: 36.1771139
)
Restaurant.create(
    name: "Moto",
    phone: "615-736-5305",
    address: "1120 McGavock St, Nashville, TN 37203",
    price: "$$$",
    website: "https://www.mstreetnashville.com/moto",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipM90DjWD1NP0ZqeYtHFrnnavbXU5EKj8clSn4Ce=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7860207,
    latitude: 36.1559851
)
Restaurant.create(
    name: "O-Ku",
    phone: "615-900-0021",
    address: "81 Van Buren St, Nashville, TN 37208",
    price: "$$",
    website: "http://o-kusushi.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNiNeEZOEOv6Rog-pAjqrCcas2TrpzDbxI9pU7-=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7843913,
    latitude: 36.182928
)
Restaurant.create(
    name: "Rolf & Daughters",
    phone: "615-866-9897",
    address: "700 Taylor St, Nashville, TN 37208",
    price: "$$$",
    website: "https://www.rolfanddaughters.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipOeq50QJ5ECR32VYTdea86GaNc9YyI1o9EAQSlT=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7928317,
    latitude: 36.1774762
)
Restaurant.create(
    name: "Tánsuŏ",
    phone: "615-782-6786",
    address: "121B 12th Ave N, Nashville, TN 37203",
    price: "$$$",
    website: "https://www.tansuonashville.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNQy1LPYcmXvXWVCYKmyd8yGtp10FLTOXUkV55T=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7879749,
    latitude: 36.1573493
)
Restaurant.create(
    name: "answer.",
    phone: "615-942-0866",
    address: "132 46th Ave N, Nashville, TN 37209",
    price: "$$$",
    website: "https://www.answerrestaurant.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipP3MeuLqR_plgWcssSJGo-588lEEuDmoXnlq0kW=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.841723,
    latitude: 36.143763
)
Restaurant.create(
    name: "Barcelona",
    phone: "615-327-0600",
    address: "1200 Villa Pl Suite 110, Nashville, TN 37212",
    price: "$$",
    website: "https://barcelonawinebar.com/location/nashville/?utm_source=yext&utm_medium=localsearch&utm_campaign=landing-page&utm_content=edgehill",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipOgKDyyg0IVthyqS-JbBxtDyWqwB7xFQCJn60Cd=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7918413,
    latitude: 36.1424126
)
Restaurant.create(
    name: "Butcher & Bee",
    phone: "615-226-3322",
    address: "902 Main St, Nashville, TN 37206",
    price: "$$",
    website: "https://www.butcherandbee.com/nashville",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNYO7MoRYngRCDBsU-YG9WXgIiPWz95bjiBBXhZ=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7564945,
    latitude: 36.1761495
)
Restaurant.create(
    name: "Butchertown Hall",
    phone: "615-454-3634",
    address: "1416 4th Ave N, Nashville, TN 37208",
    price: "$$",
    website: "https://www.butchertownhall.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNWLHq6GS-Ro0iBwcMnG39VxSdelduJxPQuHTQV=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7887857,
    latitude: 36.1790449
)
Restaurant.create(
    name: "Cafe Roze",
    phone: "615-645-9100",
    address: "1115 Porter Rd, Nashville, TN 37206",
    price: "$$",
    website: "https://www.caferoze.com/",
    rest_image: "https://getbento.imgix.net/accounts/7e204c226c1b144d6271f6ee261be52f/media/images/206091KOsHoNQUuFdhgL38Mvj_CR_Native0630.jpg?w=1000&fit=max&auto=compress,format&h=1000",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7294441,
    latitude: 36.1879621
)
Restaurant.create(
    name: "Cafe Nonna",
    phone: "615-463-0133",
    address: "4427 Murphy Rd, Nashville, TN 37209",
    price: "$$",
    website: "http://caffenonna.com/Caffe_Nonna/Caffe_Nonna_Home.html",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipNGzLKEmkrm_9Lu8yn4dOt6MdCnGPQ9g2Dykh0U=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.8395344,
    latitude: 36.140888
)
Restaurant.create(
    name: "Chauhan Ale & Masala House",
    phone: "615-242-8426",
    address: "123 12th Ave N, Nashville, TN 37203",
    price: "$$",
    website: "https://chauhannashville.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipOLbAnaiMiTdTfDhRXmOLhRH6pcUeTEfl5oCsUD=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7883576,
    latitude: 36.1577594
)
Restaurant.create(
    name: "Coco's Italian Market",
    phone: "615-783-0114",
    address: "411 51st Ave N, Nashville, TN 37209",
    price: "$$",
    website: "https://www.cocositalianmarket.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipN7rIdbc1FH2Dq9LzDYpZtKYdGoHWvmsWBttLmE=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.8486824,
    latitude: 36.1521215
)
Restaurant.create(
    name: "Epice",
    phone: "615-720-6765",
    address: "2902 12th Ave S, Nashville, TN 37204",
    price: "$$",
    website: "http://www.epicenashville.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/52cdba6ce4b085f715e9d784/1631222579238-OO9GCB97YXAEG5HDUDAZ/epice_final_0051.jpg?format=1000w",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7903,
    latitude: 36.1215415
)
Restaurant.create(
    name: "Nicky's Coal Fired",
    phone: "615-678-4289",
    address: "5026 Centennial Blvd, Nashville, TN 37209",
    price: "$$",
    website: "http://www.nickysnashville.com/",
    rest_image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ucdjltoi/e9058d54-2ee6-49ef-8c2a-6acb71c495f8.jpeg",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.8487954,
    latitude: 36.1622741
)
Restaurant.create(
    name: "Two Ten Jack",
    phone: "615-454-2731",
    address: "1900 Eastland Ave #105, Nashville, TN 37206",
    price: "$$",
    website: "http://twotenjack.com/nashville/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipOOctzZOs3NuQx_NIzj0zeUb_KX2oIFzxGCC08x=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.7356085,
    latitude: 36.1816606
)
Restaurant.create(
    name: "Peninsula",
    phone: "615-679-0377",
    address: "1035 W Eastland Ave, Nashville, TN 37206",
    price: "$$",
    website: "https://peninsulashville.com/",
    rest_image: "https://lh3.googleusercontent.com/p/AF1QipOIwmFq974Cx9-b-yvzucPt3zTxhBfe2y2kKgbH=s680-w680-h510",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.750365,
    latitude: 36.1839483
)
Restaurant.create(
    name: "Pinewood Social",
    phone: "615-751-8111",
    address: "33 Peabody St, Nashville, TN 37210",
    price: "$$",
    website: "https://www.pinewoodsocial.com/",
    rest_image: "https://images.squarespace-cdn.com/content/v1/58a0d39fbebafb6786e53995/1521562202439-FQXIPCX067E5QWWCAMOW/PW_C.Stack_Cream-01.png?format=1000w",
    open_time: Faker::Number.within(range: 5..7),
    close_time: Faker::Number.within(range: 9..12),
    capacity: Faker::Number.within(range: 20..40),
    longitude: -86.768835,
    latitude: 36.158099
)

puts 'done seeding restaurants 🍽️'

puts 'seeding 100 reservations 📆'
100.times do Reservation.create(
    user_id: User.all.sample.id,
    restaurant_id: Restaurant.all.sample.id,
    date: my_dates.sample,
    time: Faker::Number.within(range: 5..21),
    number_of_seats: Faker::Number.within(range: 2..8),
    check_type: my_check.sample
)
end
puts 'done seeding reservations 📆'

puts 'seeding 40 interests 🗣️'
40.times do Interest.create(
    reservation_id: Reservation.all.sample.id,
    interest: my_interests.sample,
    priority: Faker::Number.within(range: 1..10))
end
puts 'done seeding interests 🗣️'

puts 'seeding 200 comments 🗯️'
200.times do Comment.create(reservation_id: Reservation.all.sample.id, user_id: User.all.sample.id, comment: Faker::Movies::Lebowski.quote)
end
puts 'done seeding comments 🗯️'

puts 'seeding 300 ratings ⭐️'
300.times do Rating.create(user_id: User.all.sample.id, restaurant_id: Restaurant.all.sample.id, rating: Faker::Number.within(range: 3..5))
end
puts 'done seeding ratings ⭐️'

puts 'seeding 6 cuisines 🥙'
my_number = 0
30.times do
    my_number = my_number + 1
    Cuisine.create(restaurant_id: my_number, cuz_name: my_cuisines.sample)
end
puts 'done seeding cuisines 🥙'

puts 'done seeding all data ✅'