function MeditationList(){
    return <div>
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
        <div className="twoThings">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1Po1oxhgfxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fpvB-YRA0aA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       <div className="twoThings">
       <p className="videoDescription">Wherein we fall asleep in just under 20 minutes by doing some simple meditations together. The video will get darker and darker through the back half to ease you into a restful sleep.    
          <br></br>
        <button>With Music</button>
       </p>
        <p className="videoDescription">Wherein we remove the things that might be preventing you from getting a peaceful night's rest. And remind you that you are ARE worthy of good things and success.</p>
        </div>
        <div className="twoThings">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tSK2az9FLiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="twoThings">
       <p className="videoDescription">Wherein we meditate in an effort to bring a sense of peace into ourselves.
       <br></br> 
       <button>With Music</button>
        </p>
        </div>
    </div>
}

export default MeditationList