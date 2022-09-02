import { NavLink } from "react-router-dom";

function NavBar(){
  return  <div className="NavBar">
      <NavLink className="NavBarLink" to ="/" exact
      activeStyle={{
          color:"rgb(178, 104, 214)",
        background: "content-box radial-gradient(#9ee2ee, #f4d898)",
        textDecoration: "wavy"
      }}>
          Home
      </NavLink>
      <NavLink className="NavBarLink" to ="/meditation" exact
      activeStyle={{
        color:"rgb(178, 104, 214)",
      background: "content-box radial-gradient(#9ee2ee, #f4d898)",
      textDecoration: "wavy"
    }}>
        Meditation
    </NavLink>
      <NavLink className="NavBarLink" to ="/rambles" exact
      activeStyle={{
        color:"rgb(178, 104, 214)",
      background: "content-box radial-gradient(#9ee2ee, #f4d898)",
      textDecoration: "wavy"
    }}>
        Rambles
        </NavLink>
        <NavLink className="NavBarLink" to ="/selfcare" exact
      activeStyle={{
        color:"rgb(178, 104, 214)",
      background: "content-box radial-gradient(#9ee2ee, #f4d898)",
      textDecoration: "wavy"
    }}>
        SelfCare
        </NavLink>

        <NavLink className="NavBarLink" to ="/roleplays" exact
      activeStyle={{
        color:"rgb(178, 104, 214)",
      background: "content-box radial-gradient(#9ee2ee, #f4d898)",
      textDecoration: "wavy"
    }}>
        Roleplays
        </NavLink>
      <NavLink className="NavBarLink" to ="/requests" exact activeStyle={{
          color:"rgb(178, 104, 214)",
        background: "content-box radial-gradient(#9ee2ee, #f4d898)",
        textDecoration: "wavy"
      }}>
          Requests
          </NavLink>
  </div>}

export default NavBar