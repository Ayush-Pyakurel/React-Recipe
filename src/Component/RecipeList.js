//react router properties import
import { Link } from 'react-router-dom';

//style import
import '../Component/RecipeList.css';

//import icon
import DeleteIcon from '../assets/delete-icon.svg';

//import firebase/firestore
import { projectFirestore } from '../firebase/config';

//custome hook import
import { useTheme } from '../hooks/useTheme';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  //condition to check wheather the array is empty or not; cause even empty array returns a truthy value
  if (recipes.length === 0) {
    return <div className='error'>No Recipe to display...</div>;
  }

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime}</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
            <img
              src={DeleteIcon}
              alt='delete-icon'
              className='delete'
              onClick={() => handleDelete(recipe.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
