  # [Top Products Ecommerce](https://main.d38jhircp1zab3.amplifyapp.com/)



<h4 align="center">An e-commerce website built with a NextJs frontend and Flask Backend. Product invenotry and purchases and user authentication and orders are persisted in PostgreSQL using flask SQLalchemy.</h1>

an e-commerce website for reselling top selling products on Amazon.com using a NextJs Frontend, Flask Backend, and Postgres Database.  

Implemented product search, shopping bag, and purchasing.  

Created a user dashboard to edit contact and delivery information and track placed orders.  

 <a href="https://www.ledgerpf.com/](https://main.d38jhircp1zab3.amplifyapp.com/">Live App



## Summary

This project is a full-stack web app with the goal of establishing an e-commerce website. TopProducts is built with the NextJs React full-stack framework and uses the Flask-PostgreSQL-SQLalchemy stack to authenticate users and persist product inventory, account information, and purchases.

## Languages and Dependencies

* **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**
* **[NextJs](https://nextjs.org/)**
* **[React](https://react.dev/)**
* **[Python](https://www.python.org/)**
* **[Flask](https://flask.palletsprojects.com/en/2.3.x/)**
* **[Flask SQLalchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.1.x/)**
* **[PostgreSQL](https://www.postgresql.org/)**





## Project Directory Hierarchy

Upon successful setup (see **Setup Instructions**), you should see the following project directory hierarchy.


```
.
├── Frontend
│   ├── components
│   │   ├── account.jsx
│   │   ├── accountdetails.jsx
│   │   ├── cart.jsx
│   │   ├── cartItem.jsx
│   │   ├── checkout.jsx
│   │   ├── logincomponent.jsx
│   │   ├── logout.jsx
│   │   ├── navbar.jsx
│   │   ├── product.jsx
│   │   ├── register.jsx
│   │   ├── search.jsx
│   │   ├── transaction.jsx
│   │   └── transactions.jsx
│   ├── context.js
    ├── .next
    ├── node_modules
    ├── .env.example
    ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── pages
│   │   ├── _app.js
│   │   ├── account.js
│   │   ├── checkoutPage.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── products.js
│   │   └── register.js
│   ├── postcss.config.js
│   ├── public
│   │   ├── favicon.ico
│   │   └── vercel.svg
│   ├── styles
│   │   ├── Home.module.css
│   │   └── globals.css
│   └── tailwind.config.js
├── README.md
└── backend
    ├── Pipfile
    ├── Pipfile.lock
    ├── app.py
    ├── config.py
    ├── migrations
    │   ├── README
    │   ├── alembic.ini
    │   ├── env.py
    │   ├── script.py.mako
    │   └── versions
    │       └── cd332f08a255_.py
    ├── models.py
    └── seed.py

```


## Setup Instructions

To download the dependencies for the frontend and backend, follow tese instructions
1. Clone the repository and open it in your favorite code editor
2. Open the integrated terminal and run the following commands

pipenv install
pipenv shell
npm install

note: You may have to download the dependencies yourself if you are running a different node or python version, in such a case consult the package.json file in Frontend and pipfile in backend to view the list of libraries used in the project

3. Run your Flask API on [`localhost:5555`](http://localhost:5555) by
running python backend/app.py

4. Run your React app on [`localhost:4000`](http://localhost:4000) by
running npm run dev

5. Stand up the database by running the following commands in order

```console
export FLASK_APP=backend/app.py
flask db init
flask db upgrade head
flask db revision --autogenerate -m 'message'
flask db upgrade head
python backend/seed.py
```

