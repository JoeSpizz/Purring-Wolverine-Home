import Titles from "./Titles";
import VideoCard from "./VideoCard";

function SelfCare ({videos}){
  let vids = videos.filter(vid => vid.genre==="Selfcare");
    return <div>
    <Titles title={"Self Care"}/>
    { vids.map(vid=><VideoCard vid={vid}/>)}
  </div>
}

export default SelfCare