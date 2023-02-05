# Welcome to Flights Service

## Project Setup

- clone the project on local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=3001`
- Inside the `src/config folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "root",
    "password": "admin",
    "database": "AUTH_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create` and then execute

`npx sequelize model:generate --name User --attributes email:string,password:string`

`npx sequelize db:migrate`

```

## DB Design
 - User Table

```
