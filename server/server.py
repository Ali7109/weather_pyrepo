from flask import Flask, jsonify, request
from flask_cors import CORS
from fetchWeather import fetchData

# app isntance
app = Flask(__name__)
CORS(app)


@app.route("/api/home", methods=["GET"])
def return_home():
    city = request.args.get("city")

    return jsonify(fetchData(city))


if __name__ == "__main__":
    app.run(debug=True, port=8080)
