import React, {useState} from "react"
import VideoCard from "./VideoCard";

function MeditationList({videos}){
    let vids = videos.filter(vid => vid.genre==="Meditation")
    // const [musicForOne, setMusicForOne] = useState("https://www.youtube.com/embed/1Po1oxhgfxs");
    // const [musicForTwo, setMusicForTwo] = useState("https://www.youtube.com/embed/tSK2az9FLiw");
    // functions to swap between video with and without music, was used before refactoring code to pull from API
    // function handleClickOne(){
    //     if (musicForOne === "https://www.youtube.com/embed/1Po1oxhgfxs"){
    //         setMusicForOne("https://www.youtube.com/embed/sv1AxtBmIL8")}
    //     else{
    //         setMusicForOne("https://www.youtube.com/embed/1Po1oxhgfxs")
    //     }  }

    // function handleClickTwo(){
    //     if (musicForTwo === "https://www.youtube.com/embed/tSK2az9FLiw"){
    //         setMusicForTwo("https://www.youtube.com/embed/tZMdcmr0_sE")  }
    //     else{
    //         setMusicForTwo("https://www.youtube.com/embed/tSK2az9FLiw")
    //     }}
    // scrolls the meditaiton game into view
function miniClick(){
    const element = document.getElementById("meditationIO");
  element.scrollIntoView();
}
    return <div>
        {/* The keyframed animation for the title of this page */}
        <svg viewBox="0 0 2200 200">
  <symbol id="t-text">
      <text text-anchor="middle" x="50%" y="80%">Meditation</text>
  </symbol>
  <g class = "g-ants">
      <use href="#t-text" class="text-copy1"></use>
      <use href="#t-text" class="text-copy1"></use>
      <use href="#t-text" class="text-copy1"></use>
      <use href="#t-text" class="text-copy1"></use>
      <use href="#t-text" class="text-copy1"></use>
  </g>
</svg>
<button value="A Meditaiton Mini-Game" className="reqButton" onClick={miniClick}>A Meditation Mini-Game</button>
<br></br><br></br>
{/* The video content of the page */}
{ vids.map(vid=><VideoCard vid={vid}/>)}
        {/* Meditation .io app */}
        <div id="meditationIO">
            <h3>A 100 second meditation by <a href="https://www.buymeacoffee.com/shrikhalpada">Shri Khalpada</a></h3>
        <iframe title="meditationapp" src="https://www.thisisathing.io/" width="500px" height="700px" allow="fullscreen"></iframe>
        </div>
    </div>
}

export default MeditationList