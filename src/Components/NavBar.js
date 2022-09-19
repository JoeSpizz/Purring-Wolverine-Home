import { NavLink } from "react-router-dom";

function NavBar(){
  let activeLink = {
    color:"white",
  textDecoration: "wavy",
  background:"linear-gradient(45deg, #9325a6,#3d5ce5 )"
}
  return  <div className="NavBar">
      <NavLink className="NavBarLink" to ="/" exact activeStyle={activeLink}>
          Home
      </NavLink>
      <NavLink className="NavBarLink" to ="/meditation" exact activeStyle={activeLink}>
        Meditation
    </NavLink>
      <NavLink className="NavBarLink" to ="/rambles" exact activeStyle={activeLink}>
        Rambles
        </NavLink>
        <NavLink className="NavBarLink" to ="/selfcare" exact activeStyle={activeLink}>
        SelfCare
        </NavLink>

        <NavLink className="NavBarLink" to ="/roleplays" exact activeStyle={activeLink}>
        Roleplays
        </NavLink>
      <NavLink className="NavBarLink" to ="/requests" exact activeStyle={activeLink}>
          Requests
          </NavLink>
  </div>
  }

export default NavBar