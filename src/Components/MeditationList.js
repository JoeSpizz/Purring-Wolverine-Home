import React from "react"
import Titles from "./Titles";
import VideoCard from "./VideoCard";

function MeditationList({videos}){
    let vids = videos.filter(vid => vid.genre==="Meditation")
function miniClick(){
    const element = document.getElementById("meditationIO");
  element.scrollIntoView();
}
return <div>
    <Titles title={"Meditation"}/>
    <button value="A Meditaiton Mini-Game" className="reqButton" onClick={miniClick}>A Meditation Mini-Game</button>
        <br></br><br></br>
    { vids.map(vid=><VideoCard vid={vid}/>)}
     <div id="meditationIO">
        <h3>A 100 second meditation by <a href="https://www.buymeacoffee.com/shrikhalpada">Shri Khalpada</a></h3>
        <iframe title="meditationapp" src="https://www.thisisathing.io/" width="500px" height="700px" allow="fullscreen"></iframe>        </div>
    </div>
}

export default MeditationList