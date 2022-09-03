import React, {useState} from "react";
import RequestForm from "./RequestForm";

function Requests (){
    const [form, setForm]=useState(false)

    function handleClick(){
        setForm(!form)
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
<div id="requestFormShow">
<button value="Request Form" onClick={handleClick}>Request Form</button>
</div>
{form ? <RequestForm/> : null}
</div>
}

export default Requests