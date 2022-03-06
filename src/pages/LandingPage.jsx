import MoviesGrid from '../components/MoviesGrid';
import Search from '../components/Search';
import { useQuery } from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce';

const LandingPage = () => {
  const query = useQuery();
  const search = query.get('search');

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};

export default LandingPage;
