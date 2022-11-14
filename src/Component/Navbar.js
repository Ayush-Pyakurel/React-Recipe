import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

//component imports
import SearchBar from './SearchBar.js';

const Navbar = () => {
  const { color, changeColor } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav onClick={() => changeColor('brown')}>
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
