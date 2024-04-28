import React from "react";
import HomeNavbar from "../../Common/1_MainNavbar/1_HomeNavbar";
import { Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="app_container">
      <HomeNavbar />

      <Container fluid>
        <h5>Home</h5>
      </Container>
    </div>
  );
};

export default Home;
