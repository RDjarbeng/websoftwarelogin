import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

// import bootstrap from 'boo'

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <header className="App-header">
        <Link to ="/" className="d-flex" style={{textDecoration: "none", color: "black"}}>
        <img src={logo} className="App-logo d-flex align-items" alt="logo" />
          <div className='d-flex p-1 btn' >RD</div>
          </Link>
      </header>
      
      <Container className= "d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className = " w-100" style= {{maxWidth: "400px "}}>
      
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/'  component = {Dashboard} />
            <Route path='/signup' component = {SignUp} />
            <Route path='/login' component = {Login} />
          </Switch>
        </AuthProvider>
        </div>
      </Container>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
