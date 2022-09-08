import { NavLink } from "react-router-dom";

function NavBar(){
  return  <div className="NavBar">
      <NavLink className="NavBarLink" to ="/" exact
      activeStyle={{
          color:"white",
        textDecoration: "wavy",
        background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
        // background-color: linear-gradient(45deg, #9325a6,#3d5ce5 );
      }}>
          Home
      </NavLink>
      <NavLink className="NavBarLink" to ="/meditation" exact
      activeStyle={{
        color:"white",
        background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
      textDecoration: "wavy"
    }}>
        Meditation
    </NavLink>
      <NavLink className="NavBarLink" to ="/rambles" exact
      activeStyle={{
        color:"white",
        background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
      textDecoration: "wavy"
    }}>
        Rambles
        </NavLink>
        <NavLink className="NavBarLink" to ="/selfcare" exact
      activeStyle={{
        color:"white",
        background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
      textDecoration: "wavy"
    }}>
        SelfCare
        </NavLink>

        <NavLink className="NavBarLink" to ="/roleplays" exact
      activeStyle={{
        color:"white",
        background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
      textDecoration: "wavy"
    }}>
        Roleplays
        </NavLink>
      <NavLink className="NavBarLink" to ="/requests" exact activeStyle={{
          color:"white",
          background:"linear-gradient(45deg, #9325a6,#3d5ce5 )",
        textDecoration: "wavy"
      }}>
          Requests
          </NavLink>
  </div>}

export default NavBar