from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

# Configuração do MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'app_user'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'rotabrasil'

mysql = MySQL(app)

# Cadastro de usuário
@app.route('/usuarios', methods=['POST'])
def cadastrar_usuario():

    dados = request.get_json()

    nome = dados.get('nome')
    email = dados.get('email')
    senha = dados.get('senha')

    if not nome or not email or not senha:
        return jsonify({
            'erro': 'Todos os campos são obrigatórios'
        }), 400

    cursor = mysql.connection.cursor()

    # Verifica se o email já existe
    cursor.execute(
        "SELECT * FROM Usuario WHERE email = %s",
        (email,)
    )

    usuario_existente = cursor.fetchone()

    if usuario_existente:
        cursor.close()
        return jsonify({
            'erro': 'Email já cadastrado'
        }), 409


    cursor.execute(
        """
        INSERT INTO Usuario
        (nome, email, senha)
        VALUES (%s, %s, %s)
        """,
        (nome, email, senha)
    )

    mysql.connection.commit()

    cursor.close()

    return jsonify({
        'mensagem': 'Usuário cadastrado com sucesso'
    }), 201

@app.route('/login', methods=['POST'])
def login():

    dados = request.get_json()

    email = dados.get('email')
    senha = dados.get('senha')

    cursor = mysql.connection.cursor()

    cursor.execute(
        "SELECT user_ID, nome, email, senha, role FROM Usuario WHERE email = %s",
        (email,)
    )

    usuario = cursor.fetchone()

    cursor.close()

    if not usuario:
        return jsonify({
            'erro': 'Usuário não encontrado'
        }), 404

    senha_banco = usuario[3]

    if senha_banco != senha:
        return jsonify({
            'erro': 'Senha incorreta'
        }), 401

    return jsonify({
        'mensagem': 'Login realizado com sucesso',
        'usuario': {
            'id': usuario[0],
            'nome': usuario[1],
            'email': usuario[2],
            'role': usuario[4]
        }
    })

if __name__ == '__main__':
    app.run(debug=True)