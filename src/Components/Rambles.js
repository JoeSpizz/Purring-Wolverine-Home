import VideoCard from "./VideoCard"

function Rambles({videos}){
    let vids = videos.filter(vid => vid.genre==="Ramble");
 
   return <div>
       {/* code for the title of the component */}
   <svg viewBox="0 0 2200 200">
<symbol id="b-text">
 <text text-anchor="middle" x="50%" y="80%">Rambles</text>

</symbol>

<g class = "g-ants">
 <use href="#b-text" class="text-copy1"></use>
 <use href="#b-text" class="text-copy1"></use>
 <use href="#b-text" class="text-copy1"></use>
 <use href="#b-text" class="text-copy1"></use>
 <use href="#b-text" class="text-copy1"></use>
</g>
</svg>
{/* code for the videos themselves */}
{ vids.map(vid=><VideoCard vid={vid}/>)}
</div>
}
export default Rambles