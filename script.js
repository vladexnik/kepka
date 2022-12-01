let numberOfFilms=prompt("сколько фильмов посмотрели?");
let personalMovieDB={
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
document.write(personalMovieDB.count);

let film1=prompt("One of last films?");
let rait1=prompt("which is raiting of it?");
let film2=prompt("One of last films?");
let rait2=prompt("which is raiting of it?");
personalMovieDB.movies[film1]=rait1;
personalMovieDB.movies[film2]=rait2;
console.log(personalMovieDB);