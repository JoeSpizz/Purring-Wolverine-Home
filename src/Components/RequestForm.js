import {useState} from 'react'

function RequestForm(){
    const [formData, setFormData] = useState({
        name: "Sleepy wolverine cub",
        vidIdea: "",
        genre: "Any"
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
       console.log("form submitted "+ formData.genre)
    
        // fetch("http://localhost:3001/toys", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(newToy),
        // })
        //   .then((r) => r.json())
        //   .then(onAddToy);
      }
    return(
        <div className="container">
        <form onSubmit={handleSubmit} className="request-form">
          <h3>Request a Video</h3>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your Name (Optional)"
            className="input-text"
          />
          <br></br>
          <br></br>
          <textarea
            type="text"
            name="vidIdea"
            onChange={handleChange}
            value={formData.vidIdea}
            placeholder="Enter Your Idea..."
            id="ideaBox"
          />
          <br />
          <label for="cars">Choose a genre: </label>
  
  <select name="genre" id="vidGenre" onChange={handleChange}>
  <option value="any">Any/Other</option>
    <option value="meditation">Meditation</option>
    <option value="ramble">Ramble</option>
    <option value="selfcare">SelfCare</option>
    <option value="roleplay">Roleplay</option>
  </select>
  <br />
  <br></br>
          <input
            type="submit"
            name="submit"
            value="Submit Request"
            className="submit"
          />
        </form>
      </div>
    )
}

export default RequestForm