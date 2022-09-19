import Titles from "./Titles";
import VideoCard from "./VideoCard"

function Rambles({videos}){
    let vids = videos.filter(vid => vid.genre==="Ramble");
 
   return (
   <div>
    <Titles title={"Rambles"}/>
    { vids.map(vid=><VideoCard vid={vid}/>)}
    </div>
   )}
export default Rambles