import { Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import MeditationList from "./Components/MeditationList";
import Roleplays from "./Components/Roleplays";
import Rambles from "./Components/Rambles";
import '../src/index.css';
import Requests from "./Components/Requests";
import SelfCare from "./Components/SelfCare";

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/meditation">
          <MeditationList/>
        </Route>
        <Route exact path="/roleplays">
          <Roleplays/>
        </Route>
        <Route exact path="/rambles">
          <Rambles/>
        </Route> 
        <Route exact path="/requests">
          <Requests/>
        </Route>
        <Route exact path="/selfcare">
          <SelfCare/>
        </Route>
        </Switch>
        
      
       
    </div>
  );
}

export default App;
