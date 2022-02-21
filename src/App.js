import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import PersonAdd from './component/PersonAdd';
import UpdataPerson from './component/UpdataPerson';

function App() {
  return (
    <div className="App">
        <div class="wrapper">
           <Header/>
          
        </div>
        
            <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/addperson' component={PersonAdd}/>
                 <Route exact path="/update:id" component={UpdataPerson}/>
            </Switch>
        
    </div>
  );
}

export default App;
