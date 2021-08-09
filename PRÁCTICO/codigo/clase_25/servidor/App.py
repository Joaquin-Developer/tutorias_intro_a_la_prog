from flask import Flask, json, request
from flask_cors import CORS, cross_origin

app = Flask (__name__)
CORS(app)

@app.route('/', methods = ["GET"])
def index():
    return "Hello World!"

all_persons = [
    {"name": "Pedro Suarez", "age": 15},
    {"name": "Roberto Rodríguez", "age": 23},
    {"name": "Andrea Pérez", "age": 21},
    {"name": "Alberto Rosales", "age": 18},
]

@app.route("/get_persons", methods = ["GET"])
def get_data():
    return json.dumps(all_persons, ensure_ascii = False)

@app.route("/insert_person", methods = ["POST"])
def insert_person():
    data = request.get_json(force=True)
    print(data)
    all_persons.append({
        'name': data.get('name'),
        'age': data.get('age')
    })
    print(all_persons)
    return json.dumps({"status": True, "msg": 'Datos guardados correctamente'}, ensure_ascii=False)


if __name__ == "__main__":
    app.run(debug = True)
