import VideoCard from "./VideoCard";

function Roleplays({videos}){
    let vids = videos.filter(vid => vid.genre==="Roleplay");
    return <div>
        {/* Code for the Title of the Component */}
        <svg viewBox="0 0 2200 200">
  <symbol id="a-text">
      <text text-anchor="middle" x="50%" y="80%">Roleplays</text>
  
  </symbol>

  <g class = "g-ants">
      <use href="#a-text" class="text-copy1"></use>
      <use href="#a-text" class="text-copy1"></use>
      <use href="#a-text" class="text-copy1"></use>
      <use href="#a-text" class="text-copy1"></use>
      <use href="#a-text" class="text-copy1"></use>
  </g>
</svg>
{/* Code for the videos themselves */}
{ vids.map(vid=><VideoCard vid={vid}/>)}
{/* <div className="twoThings">
<iframe width="560" height="315" className="ytwindow" src="https://www.youtube.com/embed/FDZzvmUBq1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="315" className="ytwindow" src="https://www.youtube.com/embed/BJ6-eOOvqTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="twoThings">
    <p className="videoDescription">An idea from a reddit post, here is a topic that might otherwise be stressful, a test! However when the questions are read like this you might fall asleep rather than stress about the answers!
ASMR Soft Spoken and whispering. Some light triggers with pencil on paper.</p>
    <p className="videoDescription">Wherein you desperately need someone to help with your makeup before you go out and all you have is me. I've never done this before, but I'm sure I'll make you look great. As long as you don't look too hard.</p>

</div> */}
    </div>
}
export default Roleplays