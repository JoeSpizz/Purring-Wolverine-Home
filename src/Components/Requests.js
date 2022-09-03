import React from "react";
import RequestForm from "./RequestForm";

function Requests (){
    
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
<RequestForm/>
</div>
}

export default Requests