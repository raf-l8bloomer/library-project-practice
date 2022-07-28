/*1) In the Library.js file, add a constructor method to the Library 
class. In the constructor method, initialize the following properties:
 books, patrons.*/

class Library {
    constructor () {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1; 
    }

    addBook(book){
        this.books.push(book);
    }

    addPatron(patron){
        this.patrons.push(patron);
    }

    chargeFines(){
        const now = new Date();
        const latePatrons = this.patrons.filter(patron =>
            (patron.currentBook !== null && patron.currentBook.dueDate < now)
            );
        
            for (let patron of latePatrons){
                // difference in mmilliseconds / milliseconds per day
                const daysLate = Math.floor ( (now.getTime()- patron.currentBook.dueDate.getTime()) / (1000 * 60 * 60 * 24));
                patron.balance += this.dailyFine * daysLate;
            }
    } 
}

