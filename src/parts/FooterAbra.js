import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterAbra() {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About ABRA</h5>
            <p>ABRA (PT Agung Berkah Rejeki Abadi) is an advertising company based in Jakarta, Indonesia. We specialize in providing advertising and publishing services for various industries.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Street, Jakarta</li>
              <li>Email: info@abra.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} ABRA. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}