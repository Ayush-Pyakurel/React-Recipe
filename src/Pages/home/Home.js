//styles
import './Home.css';

//component import
import RecipeList from '../../Component/RecipeList';

//custome hooks import
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
