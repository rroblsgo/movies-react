const API = 'https://api.themoviedb.org/3';

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2M3N2ZiNWRkMjg3MDc5ZDE1NGM2NGVjYzBlNjZiZSIsInN1YiI6IjVmMzE4OTJmOWEzNThkMDAzOTk5Njc3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mrMqHQtBF2qNIO8h99GBuaExAtNbWn7hAVJNvVBdJbo',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json());
}
