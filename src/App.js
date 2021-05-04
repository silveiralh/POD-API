import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Páginas*/
import Login from './view/login';
import NewUser from './view/newUser';
import Home from './view/home';
import Register from './view/registerImage';
import Search from './view/search';



function App() {
  return (
    // - Rotas e navegação entre páginas
    <Router>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/newuser' component={NewUser}></Route>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/registerImage' component={Register}></Route>
      <Route exact path='/search' component={Search}></Route>
    </Router>
  );
}

export default App;
