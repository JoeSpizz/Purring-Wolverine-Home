import {useState} from 'react'
import API_KEY from '../Key';

function RequestForm({newRequest, form, setForm}){
    const [formData, setFormData] = useState({
        name: "Sleepy wolverine cub",
        idea: "",
        genre: "Any",
        likes: 1
      });
    // Sets formData to the information submitted
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    // Runs the POST request to add new data to the supabase server
      function handleSubmit(event) {
        event.preventDefault();
        let myHeaders = {
        "apikey" : API_KEY,
        "Content-Type": "application/json"}
        
        let raw = JSON.stringify([formData]);
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests", requestOptions)
          .then(response => response.text())
          .then(newRequest(formData))
          .catch(error => console.log('error', error));
        setForm(!form)
      }
     
    return(
        <div className="container">
        <form onSubmit={handleSubmit} className="request-form">
          <h3>Request a Video</h3>
          <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your Name (Optional)"
            className="input-text"
          />
          <br></br>
          
          <label for="cars">Choose a genre: </label>
          <select name="genre" id="vidGenre" onChange={handleChange}>
  <option value="any">Any/Other</option>
    <option value="meditation">Meditation</option>
    <option value="ramble">Ramble</option>
    <option value="selfcare">SelfCare</option>
    <option value="roleplay">Roleplay</option>
  </select>
  <br></br>
          <textarea
            type="text"
            name="idea"
            onChange={handleChange}
            value={formData.idea}
            placeholder="Enter Your Idea..."
            id="ideaBox"
          />
         
  
  <br />
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