const express = require('express')
require('./db/mongoose')

const router = express.Router()
const cors = require('cors')
const port = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(router)

app.use(cors())

const devRouter = require('./routers/developments')
app.use(devRouter)

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})

