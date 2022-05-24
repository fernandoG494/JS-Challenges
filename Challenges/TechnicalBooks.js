class Book {
    constructor(title, author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get getAvailability(){
        return this.getAvailability();
    }

    getAvailability(){
        if (this.numCopies === 0){
            return "Out of Stock!";
        } else if(this.numCopies >= 1 && this.numCopies < 10) {
            return "Low stock!";
        } else {
            return "In stock!";
        }
    }

    sell(n = 1){
        if(this.getAvailability !== "Out of Stock!"){
            if(n <= this.numCopies) this.numCopies -= n;
        }
    }

    restock(n = 5){
        this.numCopies += n;
    }
}

/**
 * Other class from Book
 */

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition){
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    getEdition(){
        return `The current version of the book is ${this.edition}.`;
    }
}

const book = new TechnicalBook(
    "Cracking The Coding Interview",
    "Gayle Laackman McDowell",
    "42323-1241243543",
    7,
    "2.3"
);

console.log(book);
