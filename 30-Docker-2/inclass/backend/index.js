"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// CORS Middleware:
// https://expressjs.com/en/resources/middleware/cors.html
// npm i cors

// const cors = require('cors')
// Default using:
// app.use(cors())
// Default options:
// app.use(cors({
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// }))
/*

    if (process.env.NODE_ENV=="development") {
        const corsOptions = {}
    } else {
        const corsOptions = {}
    }
    app.use(cors(corsOptions))
*/
// app.use(cors({
//     "origin": ["http://localhost:3000", "http://localhost:4173", "http://localhost:5173"], //"http://localhost:5173", // true // false // "*",
//     // "origin": function (origin, callback) { },
//     "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
// }))
/*
    app.get('*', cors({ origin: 'onlyget.com' }))
    app.all('*', cors({ origin: 'allmethods.com' }))
*/

app.use(require('cors')()) // Run with defaults.

// Call static uploadFile:
app.use('/upload', express.static('./upload'))

// Check Authentication:
app.use(require('./src/middlewares/authentication'))

// Run Logger:
app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Stock Management API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
})

// Routes:
app.use(require('./src/routes'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.