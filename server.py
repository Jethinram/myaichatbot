from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

# Load API key from environment variables
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message")

    if not user_message:
        return jsonify({"reply": "I couldn't process that."})

    # Send request to Gemini AI
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText"
    headers = {"Content-Type": "application/json"}
    payload = {
        "prompt": {"text": user_message},
        "temperature": 0.7
    }

    response = requests.post(f"{url}?key={API_KEY}", json=payload, headers=headers)
    response_data = response.json()

    try:
        reply = response_data["candidates"][0]["output"]
    except KeyError:
        reply = "I'm having trouble understanding. Please try again."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)
