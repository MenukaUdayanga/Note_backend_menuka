const express = require('express')
const connection = require('../db/db-connection')

saveUser = (req,res) =>{
    connection.query('insert into user values(?,?,?,?,?,?,?)',
    [req.body.user_id,req.body.firstName,req.body.lastName,req.body.email,req.body.phoneNo,req.body.userName,req.body.password],(err, rows) => {
        if (err) throw err

       res.send(rows)
    })

    
}

module.exports={saveUser}