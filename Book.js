/* 2) In the Book.js file, add a constructor method to the Book class. 
In the constructor method, initialize the following properties: 
title, author, isbn.*/

class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._out = false;
        this.dueDate = null;
        this.patron = null;
    }

    set out(out){
        this._out = out;
        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
    }

    get out(){
        return this._out;
    }
}