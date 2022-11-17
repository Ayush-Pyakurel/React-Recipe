//css import
import './App.css';

//router module import
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages import
import Home from './Pages/home/Home';
import Create from './Pages/create/Create';
import Recipe from './Pages/recipe/Recipe';
import Search from './Pages/search/Search';

//component import
import Navbar from './Component/Navbar';
import ThemeSelector from './Component/ThemeSelector';
import { useTheme } from './hooks/useTheme';

//custome hook import

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
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
