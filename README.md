1. npm install

2. Setup postgresSQL 
- At process.env, add DB_URI = 'postgresql://\<db_username>:\<db_password>@\<hostname>:5432/odin_messages' 

- populate db :  ```node ./db/populatedb.js```

3. npm run serverstart
