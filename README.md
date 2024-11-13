# e-commerce-back-end
UCB-VIRT-FSF-PT-07-2024-U-LOLC homework assignment #13

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

## Walkthrough Video
![Application walkthrough video]([https://drive.google.com/file/d/1wYbRLLUVW2vLkbZWEcc1o31lktpd6HZw](https://drive.google.com/file/d/1eIIRqJx1-_ILLGtC6IiDrI29ez7CiKYV))

## Installation 

To clone and navigate to this repository on your local machine, run the following commands:

```
$ git clone https://github.com/dawsofd/e-commerce-back-end.git
$ cd e-commerce-backend
```

Then, install the necessary dependencies by running:

```
npm install express
npm install pg
npm install sequelize
npm install dotenv
```

## Usage 
First, make a copy of the .env.EXAMPLE file and input the correct db credentials.  Save the new file as `.env`.

Second, navigate to the db directory of the project and create `ecommerce_db` by running: 

```
psql -U postgres
```

Once the postgres server is running, execute the following command to create the database: 

```
\i schema.sql
```

Seed the database by exiting from the postgres server and navigating back to the root directory to run: 

```
npm run seed
```

Finally, start the server by running: 

```
node server.js
```
