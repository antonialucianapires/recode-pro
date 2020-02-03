from flask import Flask

def create_app():

    app = Flask(__name__)

    @app.route("/")
    def home():
        return '<h1> Aula de Python com Flask </h1>' \
               '<p> Bom dia! </p>' \
               '<p>Até mais</p>'

    @app.route("/produtos")
    def produtos():
        return "<h1> Lista de produtos</h1>"

    return app