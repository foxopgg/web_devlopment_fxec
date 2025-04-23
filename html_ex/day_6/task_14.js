function getMovieDetails(movie) {
    const { title, director } = movie;
    return `The movie ${title} was directed by ${director}.`;
}

const movie = {
    title: "Inception",
    genre: "Drama",
    year: 2010,
    director: "Christopher Nolan"
};

console.log(getMovieDetails(movie)); 