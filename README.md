# MongoDB Movie Review Project

This project demonstrates MongoDB CRUD operations and Aggregation Framework using a movie review database.

## Database Used

```javascript
use movie_reviews
```

---

# Insert Documents

```javascript
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
```

---

# View All Documents

```javascript
db.movies.find()
```

---

# Filter by Genre

```javascript
db.movies.find({genre: "Sci-Fi"})
```

---

# Aggregation Query

```javascript
db.movies.aggregate([
{
   $group: {
      _id: "$genre",
      average_rating: {$avg: "$rating"}
   }
}
])
```

---

# Find Movies With Rating >= 9

```javascript
db.movies.find({rating: {$gte: 9}})
```

---

# Sort Movies By Year Descending

```javascript
db.movies.find().sort({year: -1})
```

---

# Update Query

```javascript
db.movies.updateOne(
   {title: "Joker"},
   {$set: {rating: 9}}
)
```

---

# Delete Query

```javascript
db.movies.deleteOne({title: "Joker"})
```

---

# Count Documents

```javascript
db.movies.countDocuments()
```

---

# Concepts Covered

- MongoDB Database Creation
- Collections
- insertMany()
- find()
- Filtering
- Sorting
- Aggregation Framework
- updateOne()
- deleteOne()
- countDocuments()
