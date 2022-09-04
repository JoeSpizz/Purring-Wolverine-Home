function RequestCard ({request}){
return(
    <div>
        <h3>Name: {request.name}</h3>
        <p>Idea:{request.idea}</p>
        <p>Genre:{request.genre}</p>
        <p>Likes: {request.likes}</p>
    </div>
)
}
export default RequestCard