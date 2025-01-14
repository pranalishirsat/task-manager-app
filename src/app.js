const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require('cors'); // Import cors


const app = express()

app.use(cors());

app.use(express.json())                                                             // automatically parse incoming JSON to an Object
app.use(userRouter)
app.use(taskRouter)

module.exports = app




// WE HAVE CREATED THIS FILE JUST FOR TESTING PURPOSE