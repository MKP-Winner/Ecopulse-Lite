from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple in-memory storage
actions = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_action', methods=['POST'])
def add_action():
    data = request.get_json()
    actions.append(data)
    return jsonify({"message": "Action logged!", "actions": actions})

@app.route('/get_actions')
def get_actions():
    return jsonify(actions)

if __name__ == '__main__':
    # Important for Render: bind to 0.0.0.0
    app.run(host="0.0.0.0", port=5000)
