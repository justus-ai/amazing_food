import os

from flask import Flask
from flask_pymongo import PyMongo
from bson.objectid import objectid
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.envriron.get("SECRET_KEY")


@app.route("/")
def delicious():
     return "How delicious"


if __name__== "_main_":
    app.run(host=os.environ.get("IP"),
           port=int(os.environ.get("PORT")),
        debug=False)