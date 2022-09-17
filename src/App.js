import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import MeditationList from "./Components/MeditationList";
import Roleplays from "./Components/Roleplays";
import Rambles from "./Components/Rambles";
import '../src/index.scss';
import Requests from "./Components/Requests";
import SelfCare from "./Components/SelfCare";

function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/videos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0", requestOptions)
        .then(r => r.json())
        .then(data => setVideos(data))
        .catch(error => console.log('error', error));

        
}, [])

  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <Switch>
        <Route exact path="/">
          <Home videos={videos}/>
        </Route>
        <Route exact path="/meditation">
          <MeditationList videos={videos}/>
        </Route>
        <Route exact path="/roleplays">
          <Roleplays videos={videos}/>
        </Route>
        <Route exact path="/rambles">
          <Rambles videos={videos}/>
        </Route> 
        <Route exact path="/requests">
          <Requests/>
        </Route>
        <Route exact path="/selfcare">
          <SelfCare videos={videos}/>
        </Route>
        </Switch>
        <br></br>
      <NavBar/>
       
    </div>
  )
}

export default App;
