require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');

const ctrl = require('./controller')

const { PORT, CONNECTION_STRING } = process.env

const app = express();
app.use(json());

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.newHouse)
app.delete('/api/houses/:id', ctrl.delete)

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance);
        console.log(`"I'm in."`)
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Ship docked at port: ${PORT}`)
})