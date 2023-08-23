const connection = require('../db/db-connection');


const uploadImage = (req, res) => {

    try {

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        connection.query('UPDATE student set image_name=? where std_id=?', [req.file.filename, req.params.id], (err, rows) => {
            if (err) throw err
        })

        return res.status(201).send({
            image: req.file,
            message: 'Image uploaded successfully'
        });

    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error! Try again, please!' })
    }
}

module.exports = {uploadImage }
