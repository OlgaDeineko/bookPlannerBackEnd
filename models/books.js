'use strict'
var knex = require('../pg-connection');


class Books {
    static *getAllBooks() {
        return  yield knex.select('*').from('books');
    }
    static *getBookById(id){
        return yield knex.select().from('books').where('id', '=', id);
    }
    static *deleteBook(id) {
        return  yield knex('books').where('id', '=', id).del();
    }
    static *addBook(book) {
        return  yield knex('books').insert(book);
    }

}
module.exports = Books;