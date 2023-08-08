from config import app,db
from models import User, Product, Transaction
from flask import request, session as flask_session
from sqlalchemy.exc import IntegrityError
from sqlalchemy.sql import text
from sqlalchemy import event
from sqlalchemy import or_

@app.route('/')
def home(): 
    return {}

@app.route('/session')
def session():
    user = User.query.filter(User.id==flask_session.get('user.id')).first()
    if not user:
        return {'error':'Please login'}
    return user.to_dict()
    
@app.route('/login', methods = ['POST'])
def login():
    print(request.json)
    error_message = {'error': 'username/password not on file'}
    username = request.json.get('username')
    password = request.json.get('password')
    user = User.query.filter(User.username == username).first()
    if not user: 
        return error_message, 401
    if not user.password:
        return error_message, 401
    flask_session['user_id'] = user.id 
    return user.to_dict()


if __name__ == '__main__':
    app.run(port=5555, debug=True)
    
    