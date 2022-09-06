import React, {useState} from 'react'
function RequestCard ({request}){
const [likes, setLikes] = useState(request.likes)
function handleSubmit(){
    let id = request.id
    let myHeaders = {
"apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0",
"Content-Type": "application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0",
    }
let raw = JSON.stringify([
  {
    "id": id,
    "name": request.name,
        "idea": request.idea,
       "genre": request.genre,
        "likes": likes +1
  }
]);

let requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests?id=eq.${id}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    setLikes(likes+1)
}

return(
    <div className="reqBody">
<div class="card-container">
  <div class="card">
    <h3>{request.name} requested a {request.genre} video</h3><br></br>
    <p>{request.idea}</p>
    <br></br>
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