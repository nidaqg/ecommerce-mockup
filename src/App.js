import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Details from  './pages/Details';



function App() {
  return (
    <>
   <Router>

    <Header/>
      <Switch>
        <Route exact path={'/login'}>
          <Login/>
        </Route>
        <Route exact path={['/', '/home']}>
          <Home/>
        </Route>
        <Route exact path={'/products'}>
          <Products/>
        </Route>
        <Route exact path={'/details'}>
          <Details/>
        </Route>
    </Switch>
    </Router>
    </>
  )
}

export default App;
