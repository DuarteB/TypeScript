interface Detail {
    report(): string;
}

const currentMovie = {
    title: 'Dune',
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: [ 'Action', 'Adventure' ],

    report(): string{
        return ` Title: ${this.title},\n Release Date: ${this.date},\n Rating;. ${this.rating},\n Genre: ${this.genre}\n`
    }
}

const currentTrack = {
    genre: 'rock',
    exclusive: false,
    duration: 180,

    report(): string{
        return ` Genre: ${this.genre}, \n Is Exclusive: ${this.exclusive}, \n Track Duration: ${this.duration}`
    }
}

const logDetail = (item: Detail): void => {
    console.log(item.report());
}

logDetail(currentMovie);
logDetail(currentTrack);