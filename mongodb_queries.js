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
