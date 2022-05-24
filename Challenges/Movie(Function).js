function Movie (title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getQuote = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
}

let movie = new Movie("Interestelar", "Christopher Nolan", "Sci-fi", 2014, 4.9);

console.log(movie.getQuote());