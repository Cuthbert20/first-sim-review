const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()
const itemCtrl = require('./itemCtrl')

const { SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/items', itemCtrl.getItems)
app.post('/api/items', itemCtrl.createItem)

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    
    
    app.listen(SERVER_PORT, () => console.log(`I have ${SERVER_PORT} lots itmes`))

}).catch(err => console.log(err,"Can't connect to DB"))







