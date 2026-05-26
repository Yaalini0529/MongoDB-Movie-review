from pymongo import MongoClient
import pandas as pd

client = MongoClient("mongodb://localhost:27017/")

db = client["movie_reviews"]

collection = db["movies"]

movies = list(collection.find())

df = pd.DataFrame(movies)

print(df[["title", "genre", "rating"]])