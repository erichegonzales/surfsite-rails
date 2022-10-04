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

user1 = User.create(id: 1, name: 'Eriche', username: 'nycsurflover', bio: 'Surfer by day, programmer by night', picture: 'https://www.vassarathletics.com/images/2021/2/11/Eriche_Gonzales.jpg', followers: 0, following: 0, experience_level: 'beginner', is_coach: false)
user2 = User.create(id: 2, name: 'Leila', username: 'theshredder', bio: 'Surf, basketball, hockey', picture: 'https://thumbs.dreamstime.com/b/side-profile-view-young-adult-slim-sporty-female-surfer-girl-enjoy-having-fun-swimming-surfboard-ocean-coast-wave-clear-water-245224580.jpg', followers: 0, following: 0, experience_level: 'beginner', is_coach: false)

coach1 =  Coach.create(id: 1, certifications: 'USA National Certification', coaching_experience: 'Coached for 4 years', user: user1)
coach2 =  Coach.create(id: 2, certifications: 'USA National Certification', coaching_experience: 'Coached for 4 years', user: user2)

10.times do |post|
  Post.create(image: placeholder, video: 'null', content: 'lorem ipsum', location: 'NY', likes: 0, user: user1)
end

10.times do |post|
  Post.create(image: placeholder, video: 'null', content: 'lorem ipsum', location: 'NY', likes: 0, user: user2)
end

10.times do |lesson|
  Lesson.create(title: 'Popup lesson', subtitle: '', description: 'Learn how to popup fast', image: placeholder, location: 'NYC', avg_rating: 4, coach: coach1)
end

10.times do |lesson|
  Lesson.create(title: 'Popup lesson', subtitle: '', description: 'Learn how to popup fast', image: placeholder, location: 'NYC', avg_rating: 4, coach: coach2)
end

lesson1 = Lesson.create(id: 1, title: 'Popup lesson', subtitle: '', description: 'Learn how to popup fast', image: placeholder, location: 'NYC', avg_rating: 4, coach: coach2)

5.times do |lesson|
  BookedLesson.create(date: '', time: '', lesson: lesson1, user: user1)
end

puts 'Done seeding!'