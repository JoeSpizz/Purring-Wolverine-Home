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
import API_KEY from "./Key";

function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        headers:{
          "apikey" : API_KEY
        },
        redirect: 'follow'
      };
      
      fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/videos?", requestOptions)
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
