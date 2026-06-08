from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import jwt
import datetime
from functools import wraps

SECRET_KEY = "rotabrasil_chave_secreta_muito_maior_123456789"

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

    token = jwt.encode(
    {
        'user_id': usuario[0],
        'email': usuario[2],
        'role': usuario[4],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    },
    SECRET_KEY,
    algorithm='HS256'
)

    return jsonify({
        'mensagem': 'Login realizado com sucesso',
        'token': token,
        'usuario': {
            'id': usuario[0],
            'nome': usuario[1],
            'email': usuario[2],
            'role': usuario[4]
        }
    }), 200

def token_required(f):

    @wraps(f)
    def decorated(*args, **kwargs):

        token = request.headers.get('Authorization')
        print("TOKEN RECEBIDO:", token)
        
        if not token:
            return jsonify({
                'erro': 'Token não enviado'
            }), 401

        try:
            token = token.replace('Bearer ', '')

            dados_usuario = jwt.decode(
                token,
                SECRET_KEY,
                algorithms=['HS256']
            )

        except jwt.ExpiredSignatureError:
            return jsonify({
                'erro': 'Token expirado'
            }), 401

        except jwt.InvalidTokenError:
            return jsonify({
                'erro': 'Token inválido'
            }), 401

        return f(dados_usuario, *args, **kwargs)

    return decorated

@app.route('/perfil', methods=['GET'])
@token_required
def perfil(usuario):

    return jsonify({
        'mensagem': 'Acesso autorizado',
        'usuario': usuario
    })



if __name__ == '__main__':
    app.run(debug=True)