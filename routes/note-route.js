const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Don't forget to import path module
const {noteSave,allNote,noteDelete,noteUpdate,oneNote} = require('../controller/note-controller');

const storage = multer.diskStorage({
  destination: './images/',
  filename: (req, file, cb) => {
    return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

router.post('/note_save',upload.single('image'),noteSave);
router.delete('/note_delete/:id',noteDelete);
router.put('/note_update/:id',upload.single('image'),noteUpdate);
router.get('/getAllnote',allNote);
router.get('/getById/:id',oneNote);


module.exports = router;
