import {useState} from 'react'

function RequestForm({newRequest, form, setForm, supabase}){
  console.log(supabase)
    const [formData, setFormData] = useState({
        name: "Sleepy wolverine cub",
        idea: "",
        genre: "Any",
        likes: 0
      });
    
      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    
      function handleSubmit(event) {
        event.preventDefault();

var requestOptions = {
  method: 'POST',
  body: formData,
  redirect: 'follow'
};

fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
        //  fetch("http://localhost:3000/requests", {
        //     method: "POST",
        //     headers: {
        //         "Content-type":"Application/JSON"
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then (r=>r.json())
        // .then(newRequest)
        setForm(!form)
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
            name="idea"
            onChange={handleChange}
            value={formData.idea}
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