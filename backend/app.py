from config import app,db
from models import User, Product, Transaction
from flask import request
from sqlalchemy.exc import IntegrityError
from sqlalchemy.sql import text
from sqlalchemy import event
from sqlalchemy import or_

@app.route('/')
def home(): 
    return {}
