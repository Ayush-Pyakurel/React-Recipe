//router properties import
import { useLocation } from 'react-router-dom';

//custome hook imports
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

//component imports
import RecipeList from '../../Component/RecipeList';

//style imports
import './Search.css';

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = `http://localhost:3000/recipes?q=${query}`;

  const { error, loading, data } = useFetch(url);

  const { mode } = useTheme();

  return (
    <div className={`search ${mode}`}>
      <h2 className='page-title'>Recipe including: '{query}'</h2>
      {error && <p className='error'>{error}</p>}
      {loading && <em className='loading'>Loading....</em>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
