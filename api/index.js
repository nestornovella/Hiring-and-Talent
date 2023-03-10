const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./src/routes/indexRoutes')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/', router)

const PORT = process.env.PORT || 3001


app.listen(PORT, ()=> console.log(`listen in port ${PORT}`))
console.log("hola")