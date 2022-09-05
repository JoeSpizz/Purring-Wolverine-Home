function Home (){
    return <div>
    <svg viewBox="0 0 2200 200">
<symbol id="d-text">
  <text text-anchor="middle" x="50%" y="80%">Welcome to Relaxation</text>

</symbol>

<g className = "g-ants">
  <use href="#d-text" className="text-copy1"></use>
  <use href="#d-text" className="text-copy1"></use>
  <use href="#d-text" className="text-copy1"></use>
  <use href="#d-text" className="text-copy1"></use>
  <use href="#d-text" className="text-copy1"></use>
</g>
</svg>
<div className="welcome" >
<iframe width="560" height="315" className="ytwindow" src="https://www.youtube.com/embed/uQP_0fa06rI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="homeCards">
<div className="containerH">
<div className="cardH">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="java">About Me</h2><br></br>
      <p className="java">I am dude in his mid 30's, currently located in Aurora Colorado. I have been here for almost a decade with my wife. <br></br><br></br> I recently left the world of cannabis for the world of software engineering. I am learning to code at Flatiron School and have found that I really do love creating content! </p>
    </div>
  </div>
  <div className="face face2">
    <h2>About Me</h2>
  </div>
</div>

<div className="cardH">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="python">What is ASMR?</h2>
      <br></br>
      <p className="python">Autonomous Sensory Meridian Response means a lot of things to different people, but ultimately comes down to relaxation and affirmation. Whether is be softly spoken or whispered works, non-verbal audio triggers, affirmation and self-worth triggers, or visual triggers, the goal of all ASMRtists is to help you relax. </p>
    </div>
  </div>
  <div className="face face2">
    <h2>ASMR?</h2>
  </div>
</div>

<div className="cardH">
  <div className="face face1">
    <div className="content">
      <span className="stars"></span>
      <h2 className="cSharp">Credits</h2>
      <br></br>
      <p className="cSharp">This site was built with knowledge learned from <a href="https://flatironschool.com/courses/coding-bootcamp/">Flatiron School</a> and code found on Codepen.</p>
    </div>
  </div>
  <div className="face face2">
    <h2>Credits</h2>
  </div>
</div>
</div>
</div>
</div>
}

export default Home