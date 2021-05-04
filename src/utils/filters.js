function keyFilter(movies, key) {
  return movies.filter((movie) =>
    movie.description.toLowerCase().includes(key) || movie.nameRU.toLowerCase().includes(key)
  )
}

function shortFilter(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}

module.exports = {keyFilter, shortFilter};
