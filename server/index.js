const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();


app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to db');
}).catch(err => console.log(err))


app.get("/api/inventory", );
app.post("/api/product");
app.delete("/api/product/:id");


const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});