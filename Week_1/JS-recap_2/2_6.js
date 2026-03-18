const numOfMovies = prompt("Syötä elokuvien määrä:")
const movies = [];

for (let i = 0; i < numOfMovies; i++) {
   const nimi = prompt("Syötä elokuvan nimi:")
   const arvosana = prompt("Syötä elokuvan arvio (1-5):")


   movies.push({
      nimi: nimi,
      arvosana: arvosana,
   });

}

movies.sort(function(a, b) {
   return b.arvosana - a.arvosana;
});

// Tulostetaan suosikkielokuva ja sen arvosana
document.querySelector("#suosikki").innerHTML = `Suosikkielokuvasi on ${movies[0].nimi} arvosanalla ${movies[0].arvosana}!`

//kaikki elokuvat ja niiden arvosanat
movies.shift() // Poistetaan suosikkielokuva listasta, jotta se ei tulostu uudestaan
for (let movie of movies) {
   console.log(movie)
   document.querySelector("#target").innerHTML += `<li>${movie.nimi} - ${movie.arvosana}</li>`;
}
