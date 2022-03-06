import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

const Search = () => {
  const query = useQuery();
  const search = query.get('search');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={search}
          placeholder="Movie title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            history.push(`/?search=${value}`);
          }}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
