const numOfMovies = Number(prompt("Syötä elokuvien määrä:"));
const movies = [];

for (let i = 0; i < numOfMovies; i++) {
   const nimi = prompt("Syötä elokuvan nimi:");
   const arvosana = Number(prompt("Syötä elokuvan arvio (1-5):"));

   movies.push({
      nimi: nimi,
      arvosana: arvosana,
   });
}

movies.sort(function(a, b) {
   return b.arvosana - a.arvosana;
});

// Suosikkielokuva
document.querySelector("#suosikki").innerHTML =
   `Suosikkielokuvasi on ${movies[0].nimi} arvosanalla ${movies[0].arvosana}!`;

// Lista
document.querySelector("#target").innerHTML = "";

for (let movie of movies) {
   document.querySelector("#target").innerHTML +=
      `<li>${movie.nimi} - ${movie.arvosana}</li>`;
}
