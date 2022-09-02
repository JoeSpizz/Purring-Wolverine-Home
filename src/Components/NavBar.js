import { NavLink } from "react-router-dom";

function NavBar(){
  return  <div className="NavBar">
      <NavLink to ="/" exact>Home</NavLink>
      <NavLink to ="/meditation" exact>Meditation</NavLink>
      <NavLink to ="/roleplays" exact>Roleplays</NavLink>
      <NavLink to ="/rambles" exact>Rambles</NavLink>
      <NavLink to ="/requests" exact>Requests</NavLink>
  </div>}

export default NavBar