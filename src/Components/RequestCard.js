import React, {useState} from 'react'
function RequestCard ({request}){
const [likes, setLikes] = useState(request.likes)
function handleSubmit(){
    setLikes(likes+1)
console.log(likes)
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