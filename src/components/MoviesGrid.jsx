import { useState, useEffect } from 'react';
import { useQuery } from '../hooks/useQuery';
import { get } from '../utils/httpClient';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import Spinner from '../components/Spinner';

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const location = useLocation();
  // console.log(location.search);

  const query = useQuery();
  const search = query.get('search');

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? `/search/movie?query=${search}`
      : `/discover/movie`;
    console.log(searchUrl);
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
