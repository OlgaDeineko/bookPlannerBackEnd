'use strict';

const router = require('koa-router')(),
    book = require('../../models/books');


function *getBooks() {
    try {
        let result = yield book.getAllBooks();
        this.status = 200;
        this.body = result;
    } catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}

function *getBookById(id) {
    try {
        let result = yield book.getBookById(id);
        this.status = 200;
        this.body = result;
    } catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}


function *deleteBook(id) {
    try {
        let result = yield book.deleteBook(id);
        this.status = 200;
        this.body = result;
    } catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}

function *addBook() {
    try {
        let book = yield parse(this);
        yield book.addBook(book);
        this.status = 201;
    }  catch (err) {
        console.log(err);
        this.status = 500;
        this.body = {error: err.message}
    }
}

module.exports = {
    getBooks: getBooks,
    getBookById: getBookById,
    deleteBook: deleteBook

}