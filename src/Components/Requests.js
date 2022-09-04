import React, {useState, useEffect} from "react";
import RequestForm from "./RequestForm";
import RequestCard from "./RequestCard"

function Requests (){
    const [form, setForm]=useState(false)
    const [requestArray, setRequestArray] = useState([])
    const displayedRequests = [...requestArray]
    useEffect(()=>{
        fetch("http://localhost:3000/requests")
        .then(r=>r.json())
        .then(data=>setRequestArray(data))
    }, [])

    function handleClick(){
        setForm(!form)
    }
    
    function handleRequest(request){
    setRequestArray([...requestArray, request])
     }


   return <div>
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
<button value="Request Form" onClick={handleClick}>Request Form</button>
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