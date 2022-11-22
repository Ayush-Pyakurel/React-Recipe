//styles import
import './Recipe.css';

//react router properties import
import { useParams } from 'react-router-dom';

//costume hook imports
// import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

//import react hooks
import { useState, useEffect } from 'react';

//import firestore
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
  //accessing the route parameter; and whenever we go to particular recipe id of the recipe will be attached to url
  const { id } = useParams();
  // const url = `http://localhost:3000/recipes/${id}`;
  // const { data: recipe, error, loading } = useFetch(url);

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { mode } = useTheme();

  useEffect(() => {
    setLoading(true);
    projectFirestore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setLoading(false);
          setRecipe(doc.data());
        } else {
          setError('Could not fetch the data!!!!');
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
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
