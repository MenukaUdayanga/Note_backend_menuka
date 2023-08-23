const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Registarion Page
const user = require('./routes/user-route')

app.use('/api/us',user)

// Login Page
const userlogin = require('./routes/login-route')

app.use('/api/uslo',userlogin)

// User Note Page
const usernote = require('./routes/note-route')

app.use('/api/usnt',usernote)

// Example
const example = require('./routes/example-route')

app.use('/api/exam',example)

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})