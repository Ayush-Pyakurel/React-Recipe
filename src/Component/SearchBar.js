import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  //function to submit the serach input
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };
  return (
    <div className='searchBar'>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          value={term}
          id='search'
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
