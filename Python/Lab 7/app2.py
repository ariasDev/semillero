from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    titulo = "Laboratorio 7"
    return render_template('index.html', titulo=titulo, titulo_body=titulo)

@app.route('/izquierda', methods=['POST'])
def izquierda():
    print("izquierda")
    return redirect('/')

@app.route('/derecha', methods=['POST'])
def derecha():
    print("derecha")
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')