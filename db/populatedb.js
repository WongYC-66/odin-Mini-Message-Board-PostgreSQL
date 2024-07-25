#! /usr/bin/env node

const { Client } = require('pg')

require('dotenv').config()


const SQL = `
DROP TABLE messages;

CREATE TABLE IF NOT EXISTS messages (
    id serial PRIMARY KEY,
    text VARCHAR (255) NOT NULL,
    username VARCHAR (255) NOT NULL,
    added VARCHAR (255) NOT NULL
)
;

INSERT INTO messages (text, username, added)
VALUES 
    ('Hi there!', 'Amando' ,'Thu Jul 25 2024 13:02:24 GMT+0800 (Singapore Standard Time)'),
    ('Hello World!', 'Charles', 'Thu Jul 25 2024 13:03:49 GMT+0800 (Singapore Standard Time)'),
    ('Sup!', 'Chris', 'Thu Jul 25 2024 13:05:49 GMT+0800 (Singapore Standard Time)')
;
`
async function main() {
    console.log('creating table and populating')
    console.log(process.env.DB_URI)
    const client = new Client({
        // connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
        connectionString: process.env.DB_URI
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log('done')
}

main()