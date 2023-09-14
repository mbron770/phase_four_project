  # [Top Products Ecommerce](https://main.d38jhircp1zab3.amplifyapp.com/)



<h4 align="center">An e-commerce website built with a NextJs frontend and Flask Backend. Product invenotry and purchases and user authentication and orders are persisted in PostgreSQL using flask SQLalchemy.</h1>

an e-commerce website for reselling top selling products on Amazon.com using a NextJs Frontend, Flask Backend, and Postgres Database.  

Implemented product search, shopping bag, and purchasing.  

Created a user dashboard to edit contact and delivery information and track placed orders.  

 <a href="[https://www.ledgerpf.com/](https://main.d38jhircp1zab3.amplifyapp.com/)">Live App



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
├── .next
├── node_modules
├── .env.example
├── .gitignore

```


## Setup

To download the dependencies for the frontend and backend, run:

```console
pipenv install
pipenv shell
npm install
```
note: You may have to download the dependencies individually yourself, in such a case consult the package.json file in Frontend and pipfile in backend to view the list of libraries used in the project

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:

```console
python backend/app.py
```

You can run your React app on [`localhost:4000`](http://localhost:3000) by
running:

```sh
npm run dev
```

use these commands to stand up and populate the database

```console
export FLASK_APP=backend/app.py
flask db init
flask db upgrade head
flask db revision --autogenerate -m 'message'
flask db upgrade head
python backend/seed.py
```

