import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = myclient["calendar"]

col = db["events"]

print(db.list_collection_names())