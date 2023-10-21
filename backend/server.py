from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)  # Needed for CORS errors
# app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/data", methods=["GET"])
def data():
    if request.method == "GET":
        return [
            {
                "position": [40.1097, -88.2273],
                "description": "Illini Union",
                "hidden": False,
                "signed": True,
                "filled": False
            },
            {
                "position": [40.1104, -88.230],
                "description": "Cafe Bene",
                "hidden": True,
                "signed": False,
                "filled": False
            }
        ]


if __name__ == '__main__':
    app.run(port=8000)
