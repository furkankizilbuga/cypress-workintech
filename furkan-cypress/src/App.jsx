import { Switch, Route } from 'react-router-dom';
import './App.css'
import Login from "./components/Login.jsx"
import Success from "./components/Success.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
    
  )
}

export default App
