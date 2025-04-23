function getMovieDetails(movie) {
    const { title, director } = movie;
    return `The movie ${title} was directed by ${director}.`;
}

const movie = {
    title: "50 Shades of Grey",
    genre: "Drama",
    year: 2010,
    director: "Ajmal Sins"
};

console.log(getMovieDetails(movie)); 