const express = require('express');
const connection = require('../db/db-connection');

const noteSave = (req, res) => {
  const { subject, topic, des } = req.body; // Destructure req.body
  const filename = req.file ? req.file.filename : null; // Check if req.file exists

  const query = 'INSERT INTO input_note (date, time, subject, topic, des, image) VALUES (NOW(), NOW(), ?, ?, ?, ?)';
  const values = [subject, topic, des, filename];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error saving note:", err);
      res.status(500).json({ error: "An error occurred while saving the note." });
    } else {
      res.status(200).json({ message: "Note saved successfully.", noteId: result.insertId });
    }
  });
};


allNote = (req,res) =>{
  connection.query('select* from input_note', (err, rows) => {
      if (err) throw err

     res.send(rows)
  })


}

const oneNote =(req,res) =>{

  const id = req.params.id;
  const query ='select*from input_note where id=?';

  connection.query(query,[id],(err,rows) =>{
    if(err)throw err

    res.send(rows)
  })
}


const noteDelete = (req, res) => {
  const query = "DELETE FROM input_note WHERE id=?";
  const noteId = req.params.id; // Correct destructuring

  connection.query(query, [noteId], (err, result) => {
    if (err) {
      console.error("Error deleting note:", err);
      res.status(500).json({ error: "An error occurred when deleting the note." });
    } else {
      res.status(200).json({ message: "Note deleted successfully." });
    }
  });
};


const noteUpdate = (req, res) => {
  const noteId = req.params.id; // Get the note ID from the URL parameter
  const { subject, topic, des } = req.body;
  const filename = req.file ? req.file.filename : null;

  const query = 'UPDATE input_note SET date = NOW(), time = NOW(), subject = ?, topic = ?, des = ?, image = ? WHERE id = ?';
  const values = [subject, topic, des, filename, noteId]; 

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error("Error updating note:", err);
      res.status(500).json({ error: "An error occurred while updating the note." });
    } else {
      res.status(200).json({ message: "Note updated successfully." });
    }
  });
};


module.exports = {noteSave,allNote,noteDelete,noteUpdate,oneNote};
