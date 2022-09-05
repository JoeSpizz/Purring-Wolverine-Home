import React, {useState} from 'react'
function RequestCard ({request}){
const [likes, setLikes] = useState(request.likes)
function handleSubmit(){
    let id = request.id
    fetch(`http://localhost:3000/requests/${id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":'http://localhost:3001',
      },
      body: JSON.stringify({
          likes: likes + 1
      }),
    })
      .then((r) => r.json())
  .then((json) => console.log(json));
    setLikes(likes+1)
}

return(
    <div className="reqBody">
<div class="card-container">
  <div class="card">
    <h3>{request.name} requested a {request.genre} video</h3><br></br>
    <p>{request.idea}</p>
    <br></br>
    <button type="submit" onClick={handleSubmit} id="reqButton">Likes: {likes}</button>
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