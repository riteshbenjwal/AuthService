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
 - Airplane Table
 - Flight
 - Airport
 - City

```

- A flight belongs to one airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

Relationship -> city has many airports and airport belongs to a city (one to many)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```
