import React, {useState, useEffect} from "react";
import RequestForm from "./RequestForm";
import RequestCard from "./RequestCard";
import API_KEY from "../Key";
import Titles from "./Titles";



function Requests (){
    const [form, setForm]=useState(false)
    const [requestArray, setRequestArray] = useState([])
    const displayedRequests = [...requestArray]
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
    <Titles title={"Requests"}/>
    <div id="requestFormShow">
        <button value="Request Form" onClick={handleClick} className="reqButton">Request Form</button>
        {form ? <RequestForm newRequest={handleRequest} form={form} setForm={setForm}/>: null}
    </div>
    <div className="float-container">
        {displayedRequests.map(request=> <RequestCard request={request} key={request.id}/>)}
    </div>
    </div>
}

export default Requests