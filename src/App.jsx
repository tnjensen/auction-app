import './app.scss';
import Home from './components/pages/home/Home';
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/pages/login/Login';
import Profile from './components/profile/Profile';
import Register from './components/pages/register/Register';
import {AuthContext} from './components/context/AuthContext';


function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="app">
       <Router>
      <Switch>
        <Route exact path="/">
         {/*  {user ? <Home /> : <Login />} */}
         {<Home />}
        </Route>
        <Route path="/login">
         {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
