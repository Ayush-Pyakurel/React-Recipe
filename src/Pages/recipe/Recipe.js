import './Recipe.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, error, loading } = useFetch(url);

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {loading && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>{recipe.cookingTime}</p>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>;
              })}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
