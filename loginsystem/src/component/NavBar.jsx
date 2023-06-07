import React, { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout,reset } from '../Features/Auth/AuthSlice';
import logo from "../images/background.svg"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
 function NavBar() {
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.auth)
  const [showNav, setShowNav] = useState(false);
  const navigate=useNavigate()
  const onLogout=()=>{
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand> */}
        <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>

            {user?(<>
              <MDBNavbarItem>
            <MDBNavbarLink>
              <Link onClick={onLogout}>Logout</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            </>):(<>
              <MDBNavbarItem>
            <MDBNavbarLink>
              <Link to="/Login">Login</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink>
            <Link to="/Register">Register</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>
            </>)}
            
           
            
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}


export default NavBar;