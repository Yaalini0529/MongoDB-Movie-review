use movie_reviews

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