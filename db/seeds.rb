# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding...'

Post.destroy_all
Lesson.destroy_all
placeholder = 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='

user1 = User.create(name: 'Eriche', username: 'nycsurflover', bio: 'Surfer by day, programmer by night', picture: 'https://media.istockphoto.com/photos/young-girl-surfing-at-sunset-picture-id1040907120?k=20&m=1040907120&s=612x612&w=0&h=iq7V94HdhzSlleJyt3eI8As8038EIS2hFNwatHQkp1k=', followers: 0, following: 0, experience_level: 'beginner', is_coach: false)
user2 = User.create(username: 'theshredder', picture: 'https://img.nowness.com/nowness-frontend/GPkiqZb8QOCKCEBVQY3b_f9b9d31e-ca4f-4b5c-83df-31f3ba69a361.png')
user3 = User.create(username: 'lairdhamilton', picture: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTA0MzMwMDk4Nzc5NDA5/lairdhamiltontopperjpg.jpg')
user4 = User.create(username: 'garretmcnamara', picture: 'https://www.researchgate.net/profile/Pedro-Cunha-11/publication/275522569/figure/fig30/AS:614225676361728@1523454221019/Garrett-McNamara-surfing-in-Praia-do-Norte-at-November-19-th-2014_Q640.jpg')
user5 = User.create(username: 'mayagabeira', picture: 'https://people.com/thmb/B0cgkWneaY7WLP5HPx-gMeh32R0=/1000x1000/smart/filters:no_upscale():focal(959x419:961x421)/Maya-and-the-Wave-Maya-Gabeira-01_090922-dcffcc84169747b5af027e60fd722498.jpg')
user6 = User.create(username: 'kailenny', picture: 'https://miro.medium.com/freeze/max/1200/1*0RDCV2z4m45cPPc8zfEY3A.gif')
user7 = User.create(username: 'livelovewave', picture: 'https://media.istockphoto.com/photos/surfer-make-duck-dive-underwater-surfgirl-dive-under-big-wave-picture-id1189983674?k=20&m=1189983674&s=612x612&w=0&h=tZCfUsWId1iTGbd4MY9dMSkSdcT1Sip5-i8O78KcJEU=')

coach1 =  Coach.create(certifications: 'USA Certification', coaching_experience: 'Coached for 22 years', user: user1)
coach2 =  Coach.create(certifications: 'NYC State', coaching_experience: 'Coached for 17 years', user: user2)

post1 = Post.create(image: 'https://images.squarespace-cdn.com/content/v1/5b8fd82b85ede1d87c4e69c1/1541695787042-M3BY98VX4BCDDG4V8XS8/surfing.jpg?format=2500w', caption: 'Nazare was crazy', location: 'Portugal', likes: 23512, user: user4)
post2 = Post.create(image: 'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/11362/production/_114589407_maya_espuna.jpg', caption: 'Monster wave', location: 'Portugal', likes: 543519, user: user5)
post3 = Post.create(image: 'https://static01.nyt.com/images/2020/08/02/realestate/31DOMESTIC-ROCKAWAY-slide-OJH5/31DOMESTIC-ROCKAWAY-slide-OJH5-mobileMasterAt3x.jpg', caption: 'Breakthrough day', location: 'Rockaway', likes: 258, user: user1)
post4 = Post.create(image: 'https://www.surfertoday.com/images/stories/kai-lenny.jpg', caption: 'Jaws', location: 'Hawaii', likes: 12222, user: user6)
post5 = Post.create(image: 'https://www.surfertoday.com/images/stories/themillenniumwave.jpg', caption: 'The Millenium wave was unbelievable', location: 'Hawaii', likes: 53413, user: user3)
post6 = Post.create(image: 'http://cdn.shopify.com/s/files/1/1566/2889/articles/1_8cd827f7-b746-447b-acdc-0e4f11878757.jpg?v=1653306984', caption: 'Swell', location: 'Peru', likes: 754, user: user2)
post7 = Post.create(image: 'http://www.wavelengthmag.com/wp-content/uploads/2017/01/cantab.jpg', caption: 'Barrels for life', location: 'Spain', likes: 6343, user: user1)
post8 = Post.create(image: 'https://guidetoiceland.imgix.net/292963/x/0/', caption: 'Amazing and pristine', location: 'Iceland', likes: 43541, user: user5)
post9 = Post.create(image: 'https://www.surfertoday.com/images/jamp/page/bestsurfspotshawaii.jpg', caption: 'Vertical drop', location: 'Hawaii', likes: 948570, user: user6)
post10 = Post.create(image: 'https://www.luxuryvillasincostarica.com/wp-content/uploads/2019/01/16-surfer-wave-sunset-the-indian-ocean-390051-1-min-1024x590.jpeg', caption: 'Amazing sunset views', location: 'Costa Rica', likes: 532431, user: user7)

post11 = Post.create(image: 'https://images.squarespace-cdn.com/content/v1/5b8fd82b85ede1d87c4e69c1/1541695787042-M3BY98VX4BCDDG4V8XS8/surfing.jpg?format=2500w', caption: 'Nazare was crazy', location: 'Portugal', likes: 23512, user: user1)
post12 = Post.create(image: 'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/11362/production/_114589407_maya_espuna.jpg', caption: 'Monster wave', location: 'Portugal', likes: 543519, user: user1)
post13 = Post.create(image: 'https://static01.nyt.com/images/2020/08/02/realestate/31DOMESTIC-ROCKAWAY-slide-OJH5/31DOMESTIC-ROCKAWAY-slide-OJH5-mobileMasterAt3x.jpg', caption: 'Breakthrough day', location: 'Rockaway', likes: 258, user: user1)
post14 = Post.create(image: 'https://www.surfertoday.com/images/stories/kai-lenny.jpg', caption: 'Jaws', location: 'Hawaii', likes: 12222, user: user1)
post15 = Post.create(image: 'https://www.surfertoday.com/images/stories/themillenniumwave.jpg', caption: 'The Millenium wave was unbelievable', location: 'Hawaii', likes: 53413, user: user1)
post16 = Post.create(image: 'http://cdn.shopify.com/s/files/1/1566/2889/articles/1_8cd827f7-b746-447b-acdc-0e4f11878757.jpg?v=1653306984', caption: 'Swell', location: 'Peru', likes: 754, user: user1)
post17 = Post.create(image: 'http://www.wavelengthmag.com/wp-content/uploads/2017/01/cantab.jpg', caption: 'Barrels for life', location: 'Spain', likes: 6343, user: user1)
post18 = Post.create(image: 'https://guidetoiceland.imgix.net/292963/x/0/', caption: 'Amazing and pristine', location: 'Iceland', likes: 43541, user: user1)
post19 = Post.create(image: 'https://www.surfertoday.com/images/jamp/page/bestsurfspotshawaii.jpg', caption: 'Vertical drop', location: 'Hawaii', likes: 948570, user: user1)
post20 = Post.create(image: 'https://www.luxuryvillasincostarica.com/wp-content/uploads/2019/01/16-surfer-wave-sunset-the-indian-ocean-390051-1-min-1024x590.jpeg', caption: 'Amazing sunset views', location: 'Costa Rica', likes: 532431, user: user1)


# 10.times do |post|
#   Post.create(image: placeholder, caption: 'lorem ipsum', location: 'USA', likes: 0, user: user1)
# end

lesson1 = Lesson.create(title: 'Popup stance and practice', description: 'Learn how to popup fast', image: 'https://i.ytimg.com/vi/Oz-rxkfcpIs/maxresdefault.jpg', location: 'NYC', avg_rating: 5, coach: coach2)
lesson2 = Lesson.create(title: 'Paddling through the breakzone', description: 'Learn how to get through the breaking waves', image: 'https://i.ytimg.com/vi/cPHHjp59NPg/maxresdefault.jpg', location: 'ESP', avg_rating: 4, coach: coach1)
lesson3 = Lesson.create(title: 'How to turtle roll', description: 'Learn how to get under bigger waves', image: 'https://i.ytimg.com/vi/Mscidy9HG7Q/maxresdefault.jpg', location: 'CR', avg_rating: 5, coach: coach2)
lesson4 = Lesson.create(title: 'Dropping in a steep wave', description: 'Learn how to keep your balance', image: 'https://i.ytimg.com/vi/Q0uGkFvTtMw/maxresdefault.jpg', location: 'DR', avg_rating: 5, coach: coach1)
lesson5 = Lesson.create(title: 'Going in a barrel', description: 'Learn how to stay in a barrel', image: 'https://i.ytimg.com/vi/-AtG7u7tDy0/maxresdefault.jpg', location: 'PI', avg_rating: 3, coach: coach2)
lesson5 = Lesson.create(title: 'Catching a green wave', description: 'Learn how to catch an unbroken wave', image: 'https://assets.website-files.com/613f686e92b10d496b9a654f/619527c79eada48b46f9a50e_maxresdefault%20(2).jpg', location: 'PA', avg_rating: 3, coach: coach1)
lesson6 = Lesson.create(title: 'Popup stance and practice', description: 'Learn how to popup fast', image: 'https://i.ytimg.com/vi/Oz-rxkfcpIs/maxresdefault.jpg', location: 'NYC', avg_rating: 5, coach: coach2)
lesson7 = Lesson.create(title: 'Paddling through the breakzone', description: 'Learn how to get through the breaking waves', image: 'https://i.ytimg.com/vi/cPHHjp59NPg/maxresdefault.jpg', location: 'ESP', avg_rating: 4, coach: coach1)
lesson8 = Lesson.create(title: 'How to turtle roll', description: 'Learn how to get under bigger waves', image: 'https://i.ytimg.com/vi/Mscidy9HG7Q/maxresdefault.jpg', location: 'CR', avg_rating: 5, coach: coach2)
lesson9 = Lesson.create(title: 'Dropping in a steep wave', description: 'Learn how to keep your balance', image: 'https://i.ytimg.com/vi/Q0uGkFvTtMw/maxresdefault.jpg', location: 'DR', avg_rating: 5, coach: coach1)
lesson10 = Lesson.create(title: 'Going in a barrel', description: 'Learn how to stay in a barrel', image: 'https://i.ytimg.com/vi/-AtG7u7tDy0/maxresdefault.jpg', location: 'PI', avg_rating: 3, coach: coach2)
lesson11 = Lesson.create(title: 'Catching a green wave', description: 'Learn how to catch an unbroken wave', image: 'https://assets.website-files.com/613f686e92b10d496b9a654f/619527c79eada48b46f9a50e_maxresdefault%20(2).jpg', location: 'PA', avg_rating: 3, coach: coach1)

lesson12 = Lesson.create(title: 'Paddling through the breakzone', description: 'Learn how to get through the breaking waves', image: 'https://i.ytimg.com/vi/cPHHjp59NPg/maxresdefault.jpg', location: 'ESP', avg_rating: 4, coach: coach1)
lesson13 = Lesson.create(title: 'How to turtle roll', description: 'Learn how to get under bigger waves', image: 'https://i.ytimg.com/vi/Mscidy9HG7Q/maxresdefault.jpg', location: 'CR', avg_rating: 5, coach: coach2)
lesson14 = Lesson.create(title: 'Dropping in a steep wave', description: 'Learn how to keep your balance', image: 'https://i.ytimg.com/vi/Q0uGkFvTtMw/maxresdefault.jpg', location: 'DR', avg_rating: 5, coach: coach1)
lesson15 = Lesson.create(title: 'Going in a barrel', description: 'Learn how to stay in a barrel', image: 'https://i.ytimg.com/vi/-AtG7u7tDy0/maxresdefault.jpg', location: 'PI', avg_rating: 3, coach: coach2)
lesson15 = Lesson.create(title: 'Catching a green wave', description: 'Learn how to catch an unbroken wave', image: 'https://assets.website-files.com/613f686e92b10d496b9a654f/619527c79eada48b46f9a50e_maxresdefault%20(2).jpg', location: 'PA', avg_rating: 3, coach: coach1)
lesson16 = Lesson.create(title: 'Popup stance and practice', description: 'Learn how to popup fast', image: 'https://i.ytimg.com/vi/Oz-rxkfcpIs/maxresdefault.jpg', location: 'NYC', avg_rating: 5, coach: coach2)
lesson17 = Lesson.create(title: 'Paddling through the breakzone', description: 'Learn how to get through the breaking waves', image: 'https://i.ytimg.com/vi/cPHHjp59NPg/maxresdefault.jpg', location: 'ESP', avg_rating: 4, coach: coach1)
lesson18 = Lesson.create(title: 'How to turtle roll', description: 'Learn how to get under bigger waves', image: 'https://i.ytimg.com/vi/Mscidy9HG7Q/maxresdefault.jpg', location: 'CR', avg_rating: 5, coach: coach2)
lesson19 = Lesson.create(title: 'Dropping in a steep wave', description: 'Learn how to keep your balance', image: 'https://i.ytimg.com/vi/Q0uGkFvTtMw/maxresdefault.jpg', location: 'DR', avg_rating: 5, coach: coach1)
lesson20 = Lesson.create(title: 'Going in a barrel', description: 'Learn how to stay in a barrel', image: 'https://i.ytimg.com/vi/-AtG7u7tDy0/maxresdefault.jpg', location: 'PI', avg_rating: 3, coach: coach2)

# 10.times do |lesson|
#   Lesson.create(title: 'Lesson', description: 'lorem ipsum', image: placeholder, location: 'USA', avg_rating: 5, coach: coach1)
# end

puts 'Done seeding!'