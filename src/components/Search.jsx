import { useState, useEffect } from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';

const Search = () => {
  const query = useQuery();
  const search = query.get('search');
  const [searchText, SetSearchText] = useState('');
  const history = useHistory();

  useEffect(() => {
    SetSearchText(search || '');
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/?search=${searchText}`);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => SetSearchText(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
