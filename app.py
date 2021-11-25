import os 
from flask import Flask
if os.path.exists("env.py"):
    import env


    app = Flask(__name__)

    @app.route("/")
    def delicious():
        return "How delicious"


    if __name__== "_main_":
        app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)