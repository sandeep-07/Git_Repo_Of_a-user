import React,{useState,useContext} from 'react';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap"

import {Link} from "react-router-dom"
import {UserContext} from "../context/UserContext"

const  Header = () => {
  const context = useContext(UserContext)

  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)


  return ( 
    <Navbar color="info" light expand="md">
      <NavbarBrand><Link to="/" className="text-white">LCO Git app</Link></NavbarBrand>
      <NavbarText className="text-white">
        {
          context.user?.email ?context.user.email : ""
        }
      </NavbarText>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto " navbar >
          {
            context.user 
            ? (<NavItem>
              <NavLink className="text-white" onClick={()=>{context.setUser(null)}} to="/" >
                Logout
              </NavLink>
            </NavItem>) 
            : (
              <>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signup" >
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signin" >
                  Sign in
                </NavLink>
              </NavItem>
              </>
            )
          }
        </Nav>
      </Collapse>
    </Navbar>

   );
}
 
export default Header