# from config import app, db
# from models import User, Product, Transaction
# from faker import Faker
# import random

# fake = Faker()

# with app.app_context():
#     def random_3_digits(): 
#         return str(random.randint(100,999))
    
#     def random_price():
#         return round(random.uniform(1,999),2)
    
#     db.drop_all()
#     db.create_all()
    
#     arr = [1,1,1,1,1,6,7,8,9,10]
#     users = []
#     products = []
#     # products = [1,1,1,1,2,2,3,5,9,10]
    
#     for i in range(10):
#         user = User(
#             fname=fake.first_name(), 
#             lname=fake.last_name(), 
#             username=random_3_digits(), 
#             password=random_3_digits(), 
#             address=fake.address()
#         )
#         users.append(user)
#         db.session.add(user)
        
#     for i in range(10): 
#         product = Product(
#             product_name=fake.unique.word(),
#             product_category=fake.word(),
#             price=random_price(),
#             product_quantity=fake.random_int(min=1, max=100)
#         )
#         products.append(product)    # This line was out of the loop
#         db.session.add(product)     # This line was out of the loop
    
#     for a in len(arr): 
#         transaction = Transaction(
#             # transaction_amount=products[i].price,
#             user=users[a], 
#             product=products[a], 
#             transaction_code = fake.random_int(min=1, max=100)
#         )
#         db.session.add(transaction)
    
#     db.session.commit()
        
#     print('db seeded')

from config import app, db
from models import User, Product, Transaction
from faker import Faker
import random

fake = Faker()

with app.app_context():
    def random_3_digits(): 
        return str(random.randint(100, 999))
    
    def random_price():
        return round(random.uniform(1, 999), 2)
    
    db.drop_all()
    db.create_all()
    
    arr = [1, 1, 1, 1, 1, 6, 7, 8, 9, 10]
    users = {}  # Use a dictionary
    products = {}
    
    for i in range(10):
        user = User(
            fname=fake.first_name(),
            lname=fake.last_name(),
            username=random_3_digits(),
            password=random_3_digits(),
            address=fake.address()
        )
        db.session.add(user)
        db.session.commit()  # Commit to get the id
        users[user.id] = user
        
    for i in range(10):
        product = Product(
            product_name=fake.unique.word(),
            product_category=fake.word(),
            price=random_price(),
            product_quantity=fake.random_int(min=1, max=100)
        )
        db.session.add(product)
        db.session.commit()  # Commit to get the id
        products[product.id] = product
    
    for a in arr:
        transaction = Transaction(
            user_id=a,   # Set user_id using value in arr
            product_id=fake.random_int(min=1, max=10),  # Set product_id using value in arr
            transaction_code=fake.random_int(min=1, max=3)
        )
        db.session.add(transaction)
    
    db.session.commit()
        
    print('db seeded')


    
    
    
    
        
        
    
