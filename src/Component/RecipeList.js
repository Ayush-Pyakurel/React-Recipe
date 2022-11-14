import { Link } from 'react-router-dom';

//style import
import '../Component/RecipeList.css';

const RecipeList = ({ recipes }) => {
  //condition to check wheather the array is empty or not; cause even empty array returns a truthy value
  if (recipes.length === 0) {
    return <div className='error'>No Recipe to display...</div>;
  }

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className='card'>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
