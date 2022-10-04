# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding...'

Post.destroy_all

user1 = User.create(id: 1, name: 'Test')
user2 = User.create(id: 2, name: 'Test2')

10.times do |post|
  Post.create(image: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=', video: 'null', content: 'lorem ipsum', location: 'NY', likes: 0, user: user1)
end

10.times do |post|
  Post.create(image: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=', video: 'null', content: 'lorem ipsum', location: 'NY', likes: 0, user: user2)
end


puts 'Done seeding!'