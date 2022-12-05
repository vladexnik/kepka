// let numberOfFilms=prompt("сколько фильмов посмотрели?");
// let personalMovieDB={
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };
// document.write(personalMovieDB.count);

// let film1=prompt("One of last films?");
// let rait1=prompt("which is raiting of it?");
// let film2=prompt("One of last films?");
// let rait2=prompt("which is raiting of it?");
// personalMovieDB.movies[film1]=rait1;
// personalMovieDB.movies[film2]=rait2;
// console.log(personalMovieDB);

console.log(  undefined || NaN  );
 
console.log( NaN && 2 && undefined );// undef -NaN
 
console.log( 1 && 2 && 3 ); //3
 
console.log( !1 && 2 || !3 ); //false
 
console.log( 25 || null && !3 ); //25
 
console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5);  //5
 
console.log( 5 === 5 && 3 > 1 || 5); 

let hamburger=-31;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger) {
   console.log('Done!')
}
