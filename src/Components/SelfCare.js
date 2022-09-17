import VideoCard from "./VideoCard";

function SelfCare ({videos}){
  let vids = videos.filter(vid => vid.genre==="Selfcare");
    return <div>
    {/* The keyframed animation for the title of this page */}
    <svg viewBox="0 0 2200 200">
<symbol id="e-text">
  <text text-anchor="middle" x="50%" y="80%">Self-Care</text>

</symbol>

<g class = "g-ants">
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
  <use href="#e-text" class="text-copy1"></use>
</g>
</svg>
{/* code for the videos themsevles */}
{ vids.map(vid=><VideoCard vid={vid}/>)}
</div>
}

export default SelfCare