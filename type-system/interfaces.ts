interface Movie {
    title: string;
    date: Date;
    rating: number;
    genre: string[]
}

const currentMovie = {
    title: 'Dune',
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: [ 'Action', 'Adventure' ]
}

const logMovie = (movie: Movie): void => {
    console.log(`Title: ${movie.title}`);
    console.log(`Release Date: ${movie.date}`);
    console.log(`Rating: ${movie.rating}`);
    console.log(`Genre: ${movie.genre}`);
}

logMovie(currentMovie);