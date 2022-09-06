import React, {useState, useEffect} from "react";
import RequestForm from "./RequestForm";
import RequestCard from "./RequestCard";
import { createClient } from '@supabase/supabase-js'
// code to ensure supabase is hooked up and easy to use. To be honest I mostly ignored this because i was new to it.
const supabaseUrl = 'https://nwgnkvaekitnxrbjbcch.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0"
const supabase = createClient(supabaseUrl, supabaseKey)


function Requests (){
    const [form, setForm]=useState(false)
    const [requestArray, setRequestArray] = useState([])
    const displayedRequests = [...requestArray]
    // pulls all requests initially
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://nwgnkvaekitnxrbjbcch.supabase.co/rest/v1/Requests?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z25rdmFla2l0bnhyYmpiY2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODY2MDMsImV4cCI6MTk3Nzk2MjYwM30.f5fnLu4pfrXFcsP4VGAdDgwGmsXM0QwKiFTKSLanst0", requestOptions)
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
{form ? <RequestForm supabase={supabase} newRequest={handleRequest} form={form} setForm={setForm}/>: null}
</div>
<div className="float-container">
{displayedRequests.map(request=> <RequestCard request={request} key={request.id}/>)}
</div>
</div>
</div>
}

export default Requests