import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Recipe Directory</h1>
        </Link>

        <Link to='/create'>Create Recipe</Link>

        {/* <Link to='/search'>Search Recipe</Link>

        <Link to='/recipe'>Recipe</Link> */}
      </nav>
    </div>
  );
};

export default Navbar;
