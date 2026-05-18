/* Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return: "Inception (8.8)"
    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

console.log("______________________THE START___________________");

// Sample movie dataset
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter(): only Sci-Fi movies
let fil = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("The Sci-Fi Movies Are : ", fil);

// 2. map(): return "Inception (8.8)"
// Better: map all movies into "Title (Rating)" format
let mappedMovies = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Movies With Ratings : ", mappedMovies);

// 3. reduce(): calculate average rating
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
console.log("The Average Rating of Movies : ", totalRating / movies.length);

// 4. find(): locate movie "Joker"
let finding = movies.find(movie => movie.title === "Joker");
console.log("The Movie Found : ", finding);

// 5. findIndex(): locate index of "Avengers"
let findmovPosition = movies.findIndex(movie => movie.title === "Avengers");
console.log("The Position Of Avengers Movie : ", findmovPosition);

console.log("___________________THE END_________________________");
