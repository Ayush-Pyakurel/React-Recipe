import './Create.css';

import { useFetch } from '../../hooks/useFetch';

import { useState, useRef, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngrediants, setNewIngrediants] = useState('');
  const [ingredients, setIngrediants] = useState([]);

  const titleRef = useRef(null);

  const history = useHistory();

  const { mode } = useTheme();

  const { postData, data, error, loading } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  );

  //auto focus on the first input field immediately the component render
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  //funtion to submit the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: `${cookingTime} mins`,
    });
  };

  //after the data changes component will be re-evaluated thus push the user to home page
  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data, history]);

  //function to add the ingrediants
  const handleAddIngrediants = (e) => {
    e.preventDefault();
    const trimedIngrediants = newIngrediants.trim();

    //as ingrediants should not be duplicated; this is to check wheather the ingrediants are unique or not and updating the new added ingrediants inside array
    if (trimedIngrediants && !ingredients.includes(trimedIngrediants)) {
      setIngrediants((prevIngrediants) => [
        ...prevIngrediants,
        trimedIngrediants,
      ]);
    }
    setNewIngrediants('');
  };

  return (
    <div className={`create ${mode}`}>
      <h2 className='page-title'>Add New Recipe: </h2>

      <form onSubmit={handleFormSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            ref={titleRef}
          />
        </label>
        <>
          <label>
            <span>Recipe Ingrediants: </span>
            <div className='ingrediants'>
              <input
                onChange={(e) => {
                  setNewIngrediants(e.target.value);
                }}
                value={newIngrediants}
              />
              <button onClick={handleAddIngrediants}>Add</button>
            </div>
          </label>
          <p>
            Current Ingrediants:
            {ingredients &&
              ingredients.map((ingrediant) => (
                <em key={ingrediant}>{ingrediant},</em>
              ))}
          </p>
        </>
        <label>
          <span>Recipe Method: </span>
          <textarea
            type='textarea'
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Tim (Mins): </span>
          <input
            type='number'
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Create;
