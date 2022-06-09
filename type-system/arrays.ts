const favoriteShows: string[] = ['The office', 'Friends', 'How I Met Your Mother'];
const dates: Date[] = [new Date(), new Date()];

const meals: string[][] = [['breakfast'], ['lunch'], ['dinner']];

//Help with inference
const office = favoriteShows[0];

//Prevent incompatible values
// favoriteShows.push(100);

//Help with methods
favoriteShows.map((show: string): string => {
    return show.concat();
})

//Arrays have multiple types
const holidays: (Date | string)[]  = [];
holidays.push(new Date());
holidays.push('2022-01-01');
// holidays.push(100);