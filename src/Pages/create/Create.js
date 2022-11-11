import './Create.css';

import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(method, cookingTime, title);
  };
  return (
    <div className='create'>
      <h2 className='page-title'>Add New Recipe: </h2>

      <form onSubmit={handleFormSubmit}>
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
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default Create;
