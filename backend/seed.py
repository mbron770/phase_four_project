from config import app, db
from models import User, Product, Transaction
from faker import Faker
import random

fake = Faker()

with app.app_context():
    def random_3_digits(): 
        return str(random.randint(100,999))
    
    def random_price():
        return round(random.uniform(1,999),2)
    
    db.drop_all()
    db.create_all()
    
    users = []
    products = []
    
    for i in range(10):
        user = User(
            fname=fake.first_name(), 
            lname=fake.last_name(), 
            username=random_3_digits(), 
            password=random_3_digits(), 
            address=fake.address()
        )
        users.append(user)
        db.session.add(user)
        
    for i in range(10): 
        product = Product(
            product_name=fake.unique.word(),
            product_category=fake.word(),
            price=random_price(),
            product_quantity=fake.random_int(min=1, max=100)
        )
        products.append(product)    # This line was out of the loop
        db.session.add(product)     # This line was out of the loop
    
    for i in range(10): 
        transaction = Transaction(
            transaction_amount=products[i].price,
            user=users[i], 
            product=products[i]
        )
        db.session.add(transaction)
    
    db.session.commit()
        
    print('db seeded')

    

    # def seed_data():
    # db.drop_all()
    # db.create_all()
    
    # users = []
    # products = []
    
    # for i in range(10):
    #     user = User(fname = fake.first_name(), 
    #     lname = fake.last_name(), 
    #     username = random_3_digits(), 
    #     password = random_3_digits(), 
    #     address = fake.address())
        
    #     users.append(user)
    #     db.session.add(user)
        
    # for i in range(10): 
    #     product = Product(
    #         product_name = fake.unique.word(),
    #         product_category = fake.word(),
    #         price = random_price(),
    #         product_quantity = fake.random_int(min = 1, max =100) 
            
    #     )
        
    # products.append(product)
    # db.session.add(product)
    
    
    # for i in range(10): 
    #     transaction = Transaction(
    #         transaction_amount = products[i].price,
    #         user = users[i], 
    #         product = products[i]
    #     )
        
    #     db.session.add(transaction)
    # db.session.commit()
        
    # print('db seeded')
# seed_data()
# if __name__ == "__main__":
#     seed_data()
    
    
    
        
        
    