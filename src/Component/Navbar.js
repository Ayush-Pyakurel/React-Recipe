import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Recipe Directory</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
