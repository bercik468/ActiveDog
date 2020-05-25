import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import dog from "./images/activedog4.jpg";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src={dog}>
            <Router>
              <MDBNavbar
                color="danger-color"
                dark
                scrolling
                transparent
                expand="md"
                fixed="top"
              >
                <MDBContainer>
                  <MDBNavbarBrand href="/">
                    <strong>Active Dog</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to="#">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Link</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">Profile</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
            </Router>

            <MDBMask
              overlay="indigo-slight"
              className="flex-center flex-column text-white text-center align-items-start  px-5"
            >
              <h2 className="wow flipInY">This Navbar isn't fixed</h2>
              <h5 className="wow flipInY" data-wow-delay="0.5s">
                When you scroll down it will disappear
              </h5>
              <br />
              <p className="wow flipInY" data-wow-delay="0.7s">
                Full page intro with background image will be always displayed
                in full screen mode, regardless of device{" "}
              </p>
            </MDBMask>
          </MDBView>
        </header>

        <main className=" overflow">
          <MDBContainer className="text-center my-5">
            <p className="wow flipInY" align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Navigation;
