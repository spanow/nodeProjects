/* eslint-disable no-param-reassign */
const express = require('express');
const booksController = require('../controllers/booksController');

function routes(Book) {
    const bookRouter = express.Router();
    const controller = booksController(Book);
    bookRouter.route('/books')
        .post(controller.post)
        .get(controller.get);

    bookRouter.use('/books/:bookId', (req, res, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                return res.send(err);
            }
            if (book) {
                req.book = book;
                return next();
            }
            return res.sendStatus(404);
        });
    });

    bookRouter.route('/books/:bookId')
        .get((req, res) =>{// tp-async-callback
            const retrunBook=req.book.toJSON();

            retrunBook.links = {};
            const genre= req.book.genre;
            retrunBook.links.FilterbyThisGenre ='http://'+req.headers.host+'/api/books/?genre='+genre;
            res.json(retrunBook);
        })
        .put((req, res) => {
            const {book} = req;
            book.title = req.body.title;
            book.author = req.body.author;
            book.price = req.body.price;
            book.genre = req.body.genre;
            book.quantity = req.body.quantity;
            book.available = req.body.available;
            req.book.save((err)=>{
                if(err){
                    return res.send(err);
                }
                return res.json(book);
            });
        })
        .patch((res,req)=>{
        const {book}=req;
        // eslint-disable-next-line no-underscore-dangle
            if(req.body._id){
                // eslint-disable-next-line no-underscore-dangle
                delete req.body._id;
            }
            Object.entries(req.body).forEach((item)=>{
                const key= item[0];
                const value = item[1];
                book[key] = value;
            });
            req.book.save((err)=>{
               if(err){
                   return res.send(err);
               }
               return res.json(book);
            });
        })
        .delete((req,res)=>{// tp-async-promise-then
            req.book.remove()
                .then(res.sendStatus(204))
                .catch(err=> res.send(err));
        });
    return bookRouter;
}

module.exports = routes;