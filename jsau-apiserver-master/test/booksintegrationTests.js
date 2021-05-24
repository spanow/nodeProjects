require('should');

const requist = require('supertest');
const mongoose = require('mongoose');

process.env.ENV='Test';

const app= require('../app');
const Book = require('../models/bookModel');
const agent = requist.agent(app);

describe('Book Crud Test',()=>{
   it('should allow a book to be posted and return read and _id',(done)=>{
       const bookPost ={title: 'My Book',price: 120, author: 'Jon', genre : 'Fiction',quantity:10};

       agent.post('/api/books')
           .send(bookPost)
           .expect(200)
           .end((err,results)=>{
              results.body.available.should.not.equals("false");
              results.body.should.have.property('_id');
              done();
           });
   }) ;

   afterEach((done)=>{
      Book.deleteMany({}).exec();
      done();
   });

   after((done)=>{
       mongoose.connection.close();
       app.server.close(done());
   })
});