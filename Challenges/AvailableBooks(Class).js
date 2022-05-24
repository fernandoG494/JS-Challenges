/**
 * Class
 */

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

let book1 = new Book("The Cthulhu's Call", "H.P. Lovecraft", "42323-12412412", 7);

book1.restock(5);
book1.sell(10);
console.log(book1.getAvailability());
