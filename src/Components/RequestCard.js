import React, {useState} from 'react'
import API_KEY from '../Key'
function RequestCard ({request}){
const [likes, setLikes] = useState(request.likes)
// This is the function to update likes. PUT request used because PATCH triggers cors block
function handleSubmit(){
    let id = request.id
    let myHeaders = {
"apikey": API_KEY,
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`,
    }
let raw = JSON.stringify([
  {  "id": id,
     "name": request.name,
     "idea": request.idea,
      "genre": request.genre,
      "likes": likes +1 }
]);

let requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'};

fetch(`https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests?id=eq.${id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    setLikes(likes+1)}

return(
    <div className="reqBody">
<div class="card-container">
  <div class="card">
    {/* data for card */}
    <h3>{request.name} requested a {request.genre} video</h3><br></br>
    <p>{request.idea}</p>
    <br></br>
    {/* to help create styling for card */}
    <button type="submit" onClick={handleSubmit} className="reqButton">Likes: {likes}</button>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 
</div>
</div>
)
}
export default RequestCard