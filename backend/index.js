const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

const mongoDB = require('./db')
mongoDB()
const Orders = require('./models/Orders')
console.log(Orders)

app.use(cors({
  origin: 'http://localhost:3000',
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.get('/', (req, res) => {
  res.send('Hello World!...')
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})