import {SHORT_DURATION} from "./data";

export function keyFilter(movies, key) {
  return movies.filter((movie) =>
    movie.description.toLowerCase().includes(key) || movie.nameRU.toLowerCase().includes(key)
  )
}

export function shortFilter(movies) {
  return movies.filter((movie) => movie.duration <= SHORT_DURATION);
}
