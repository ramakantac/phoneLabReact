import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Updated path

const NavbarExample = () => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <div className="container-fluid">
        <MDBNavbarBrand href="/">PhoneLab</MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavbarItem>
            <MDBNavbarLink href="/home">Home</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/about">About</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </div>
    </MDBNavbar>
  );
};

export default NavbarExample;