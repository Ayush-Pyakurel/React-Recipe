//styles
import './Home.css';

//custome hooks import
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch(' http://localhost:3000/recipes');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading....</p>}
      {data &&
        data.map((recipe) => {
          return <h2 key={recipe.id}>{recipe.title}</h2>;
        })}
    </div>
  );
};

export default Home;
