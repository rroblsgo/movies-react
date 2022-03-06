import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get('search');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={search ?? ' '}
          autoFocus
          placeholder="Movie title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            setQuery({ search: value });
            // navigate(`/?search=${value}`);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
};

export default Search;
