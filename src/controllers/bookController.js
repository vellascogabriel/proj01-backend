const Book = require('../models/Book');

class BookController{

    async store(req, res){
        const book = new Book({
            title: req.body.title,
            subject: req.body.subject,
            author: req.body.author,
            case: req.body.case,
        })
    
        book.save()
        .then(response => { 
            return res.json(response);
        })
        .catch(err => { 
            res.json({message: err})
        });
    }

    async index(req, res){
        
    try{
        const books = await Book.find();

        return res.json(books)
        
    }catch(err){
        return res.json({message: err})
    }

    }

    async delete(req, res){

        try{
            const removedBook = await Book.deleteOne({_id:req.params.id})
            
            res.json(removedBook)
        
            }catch(err){
                res.json({message:err});
            }
    }
}


module.exports = new BookController();