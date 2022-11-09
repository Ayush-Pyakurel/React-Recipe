//css import
import './App.css';

//router module import
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//pages import
import Home from './Pages/home/Home';
import Create from './Pages/create/Create';
import Recipe from './Pages/recipe/Recipe';
import Search from './Pages/search/Search';

//component import
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/recipe/:id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
