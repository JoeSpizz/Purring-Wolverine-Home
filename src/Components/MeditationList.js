import React, {useState} from "react"

function MeditationList(){
    const [musicForOne, setMusicForOne] = useState("https://www.youtube.com/embed/1Po1oxhgfxs");
    const [musicForTwo, setMusicForTwo] = useState("https://www.youtube.com/embed/tSK2az9FLiw");
    // functions to swap between video with and without music
    function handleClickOne(){
        if (musicForOne === "https://www.youtube.com/embed/1Po1oxhgfxs"){
            setMusicForOne("https://www.youtube.com/embed/sv1AxtBmIL8")}
        else{
            setMusicForOne("https://www.youtube.com/embed/1Po1oxhgfxs")
        }  }

    function handleClickTwo(){
        if (musicForTwo === "https://www.youtube.com/embed/tSK2az9FLiw"){
            setMusicForTwo("https://www.youtube.com/embed/tZMdcmr0_sE")  }
        else{
            setMusicForTwo("https://www.youtube.com/embed/tSK2az9FLiw")
        }}
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
        <div className="twoThings">
        <iframe width="560" height="315" className="ytwindow" src={musicForOne} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" className="ytwindow" src="https://www.youtube.com/embed/fpvB-YRA0aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       <div className="twoThings">
       <p className="videoDescription">Wherein we fall asleep in just under 20 minutes by doing some simple meditations together. The video will get darker and darker through the back half to ease you into a restful sleep.    
          <br></br>
        <button onClick={handleClickOne}>With Music</button>
       </p>
        <p className="videoDescription">Wherein we remove the things that might be preventing you from getting a peaceful night's rest. And remind you that you are ARE worthy of good things and success.</p>
        </div>
        <div className="twoThings">
        <iframe width="560" height="315" className="ytwindow" src={musicForTwo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="twoThings">
       <p className="videoDescription">Wherein we meditate in an effort to bring a sense of peace into ourselves.
       <br></br> 
       <button onClick={handleClickTwo}>With Music</button>
        </p>
        </div>
        {/* Meditation .io app */}
        <div id="meditationIO">
            <h3>A 100 second meditation by <a href="https://www.buymeacoffee.com/shrikhalpada">Shri Khalpada</a></h3>
        <iframe title="meditationapp" src="https://www.thisisathing.io/" width="500px" height="700px" allow="fullscreen"></iframe>
        </div>
    </div>
}

export default MeditationList