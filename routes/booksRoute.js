const express = require('express')
const router = express.Router()
const {addNewBook, getAllBooks, updateBook, deleteBook} = require('../controllers/booksController')
const {validateBook} = require('../controllers/validateController')

router.route('/').post(addNewBook).get(getAllBooks).patch(updateBook).delete(deleteBook)
router.route('/validate').post(validateBook)

module.exports = router