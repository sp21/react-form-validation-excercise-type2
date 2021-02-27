import './App.css';
import Employee from './components/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import EditEmployee from './components/EditEmployee';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" render={()=>(<Redirect to="/card"/>)}/>
        <Route path="/card" component={Card}/>
        <Route path="/employee" component={Employee}/>
        <Route path="/edit/:empId" component={EditEmployee}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
