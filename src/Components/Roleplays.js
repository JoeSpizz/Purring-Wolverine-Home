import Titles from "./Titles";
import VideoCard from "./VideoCard";

function Roleplays({videos}){
    let vids = videos.filter(vid => vid.genre==="Roleplay");
    return <div>
  <Titles title={"Roleplays"}/>
{ vids.map(vid=><VideoCard vid={vid}/>)}
    </div>
}
export default Roleplays