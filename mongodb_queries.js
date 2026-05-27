use movie_reviews

db.movies.insertMany([
{
  title: "Inception",
  genre: "Sci-Fi",
  rating: 9,
  year: 2010
},
{
  title: "Interstellar",
  genre: "Sci-Fi",
  rating: 10,
  year: 2014
},
{
  title: "Joker",
  genre: "Drama",
  rating: 8,
  year: 2019
}
])

db.movies.find()

db.movies.find({genre: "Sci-Fi"})

db.movies.aggregate([
{
   $group: {
      _id: "$genre",
      average_rating: {$avg: "$rating"}
   }
}
])

db.movies.find({rating: {$gte: 9}})

// Sort movies by year in descending order
db.movies.find().sort({year: -1})

db.movies.updateOne(
   {title: "Joker"},
   {$set: {rating: 9}}
)

// To Delete Joker movie
db.movies.deleteOne({title: "Joker"})

// Count total 
db.movies.countDocuments()

//To Find movies released after 2012
db.movies.find({year: {$gt: 2012}})

// To Find only title and rating fields
db.movies.find({}, {title: 1, rating: 1, _id: 0})

// To Find a particular movie 
db.movies.findOne({title: "Inception"})

//To Insert one more movie
db.movies.insertOne({
  title: "Avatar",
  genre: "Fantasy",
  rating: 8,
  year: 2009
})

db.movies.find().limit(2)

// Skip 
db.movies.find().skip(1)

// Sort by rating ascending
db.movies.find().sort({rating: 1})

db.movies.aggregate([
{
   $group: {
      _id: "$genre",
      max_rating: {$max: "$rating"}
   }
}
])
