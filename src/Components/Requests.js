import React, {useState, useEffect} from "react";
import RequestForm from "./RequestForm";
import RequestCard from "./RequestCard";
import API_KEY from "../Key";



function Requests (){
    const [form, setForm]=useState(false)
    const [requestArray, setRequestArray] = useState([])
    const displayedRequests = [...requestArray]
    // pulls all requests initially
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            headers: {
                "apikey": API_KEY
            },
            redirect: 'follow'
          };
          
          fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests?", requestOptions)
            .then(r => r.json())
            .then(data => setRequestArray(data))
            .catch(error => console.log('error', error));

            
    }, [])
// displays/hides the request form
    function handleClick(){
        setForm(!form)
    }
    // adds new request to the fulls request array for display
    function handleRequest(request){
    setRequestArray([...requestArray, request])
     }


   return <div>
           {/* Creation of title for page */}
   <svg viewBox="0 0 2200 200">
<symbol id="c-text">
 <text text-anchor="middle" x="50%" y="80%">Requests</text>

</symbol>

<g class = "g-ants">
 <use href="#c-text" class="text-copy1"></use>
 <use href="#c-text" class="text-copy1"></use>
 <use href="#c-text" class="text-copy1"></use>
 <use href="#c-text" class="text-copy1"></use>
 <use href="#c-text" class="text-copy1"></use>
</g>
</svg>
{/* start of actual component */}
<div>
<div id="requestFormShow">
<button value="Request Form" onClick={handleClick} className="reqButton">Request Form</button>
</div>
<div>
{form ? <RequestForm newRequest={handleRequest} form={form} setForm={setForm}/>: null}
</div>
<div className="float-container">
{displayedRequests.map(request=> <RequestCard request={request} key={request.id}/>)}
</div>
</div>
</div>
}

export default Requests