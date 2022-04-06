const router = require('express').Router()
const Book = require('../model/BookSchema')


//@desc    Enter an entry
//@@route  POST /api/v1/book
//@@access PUBLIC
router.post('/', async (req,res) => {
    const { title, author, isbn } = req.body
    const newBook = await Book.create({ title, author, isbn })
    res.status(201).json({ success:true, data:newBook })
})


router.get('/',  async (req,res) => {
    const books = await Book.find()
    if(!books){
        return res.status(404).json({ success:false, data:'No book found' })
    }
    res.status(200).json({ success:true, data: books, num: books.length})
})

router.get('/:id',  async (req,res) => {
  const book = await Book.findById(req.params.id)
  if(!book){
      return res.status(404).json({ success:false, data: 'No book found' })
  }  
  res.status(200).json({ success:true, data: book })
})


//@desc    UPDATE an entry
//@@route  PUT /api/v1/book/:id
//@@access PUBLIC
router.put('/:id', async (req,res) => {
    let book = await Book.findById(req.params.id)
    if(!book){
        return res.status(404).json({ success:false, data: 'No book found' })
    }  
    book = await Book.findByIdAndUpdate(req.params.id, {$set:req.body}, {
        new:true,
        runValidator:false
    })  
    res.status(200).json({ success:true, data: book })
})


//@desc    DELETE an entry
//@@route  PUT /api/v1/book/:id
//@@access PUBLIC
router.delete('/:id', async (req,res) => {
    await Book.findByIdAndRemove(req.params.id)
    res.status(200).json({ success:true, data: 'book deleted' })
})

router.delete('/', async (req,res) => {
    await Book.deleteMany()
   res.status(200).json({ success:true, data: 'All books deleted' })
})


module.exports = router
