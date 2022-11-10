import './Create.css';

import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  return (
    <div className='create'>
      <h2>Add New Recipe: </h2>

      <form>
        <label>
          <span>Recipe Title: </span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* Ingrediants */}
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
      </form>
    </div>
  );
};

export default Create;
