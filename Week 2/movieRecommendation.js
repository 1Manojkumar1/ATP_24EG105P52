//Movie details in an array of objects
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
    console.log("Sci-Fi Movies: ")
    let sciFiMovies=movies.filter((movie)=>movie.genre==="Sci-Fi")
    console.log(sciFiMovies)

// 2. map() to return:
//         "Inception (8.8)"
    console.log("\nMovies with Ratings: ")
    let movieTitleWithRating=movies.map((movie)=>`${movie.title} (${movie.rating})`)
    console.log(movieTitleWithRating)

// 3. reduce() to find average movie rating
    console.log("\nAverage Movie Rating: ")
    let sumOfRatings=movies.reduce((acc,movie)=>acc+movie.rating,0)
    let average=sumOfRatings/movies.length
    console.log(average)

// 4. find() movie "Joker"
    console.log("\nMovie Details: ")
    let movieDetails=movies.find((movie)=>movie.title==="Joker")
    console.log(movieDetails)

// 5. findIndex() of "Avengers"
    console.log("\nIndex of Avengers: ")
    let indexOfAvengers=movies.findIndex((movie)=>movie.title==="Avengers")
    console.log(indexOfAvengers)