import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="site_footer">
      <Container fluid className="px-0 bg-dark pt-4 ">
        <Row className="me-0">
          <Col
            className=" d-flex justify-content-center gap-5 border-end border-opacity-75"
            md={8}>
            <Col xs={12} sm={2} md={2}>
              <div>
                <h6>About</h6>
                <ul className="footer_links">
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Flipkart Stories</a>
                  </li>
                  <li>
                    <a href="/">Press</a>
                  </li>
                  <li>
                    <a href="/">Corporate Information</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={2} md={2}>
              <div>
                <h6>Group Companies</h6>
                <ul className="footer_links">
                  <li>
                    <a href="/">Myntra</a>
                  </li>
                  <li>
                    <a href="/">Flipkart Wholesale</a>
                  </li>
                  <li>
                    <a href="/">Cleratrip</a>
                  </li>
                  <li>
                    <a href="/">Shopsy</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={2} md={2}>
              <div>
                <h6>Help</h6>
                <ul className="footer_links">
                  <li>
                    <a href="/">Payments</a>
                  </li>
                  <li>
                    <a href="/">Shipping</a>
                  </li>
                  <li>
                    <a href="/">Cancellation & Returns</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Report Inftingement</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={2} md={2}>
              <div>
                <h6>Consumer Policy</h6>
                <ul className="footer_links">
                  <li>
                    <a href="/">Cancellation & Returns</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/">Security</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="/">Sitemap</a>
                  </li>
                  <li>
                    <a href="/">Grievance Redressal</a>
                  </li>
                  <li>
                    <a href="/">EPR Compliance</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Col>

          <Col className=" d-flex px-5 gap-4 " md={4}>
            <Col xs={12} sm={2} md={6}>
              <div>
                <h6>Mail Us:</h6>

                <p className="">
                  Flipkart Internet Private Limited, Buildings Alyssa, Begania &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India
                </p>
              </div>
            </Col>
            <Col xs={12} sm={2} md={6}>
              <div>
                <h6>Registered Office Address</h6>
                <p className="">
                  Flipkart Internet Private Limited, Buildings Alyssa, Begania &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
                  India CIN: U51109KA2012PTC066107 Telephone:{" "}
                  <span className="text-primary">044-45614700</span>
                </p>
              </div>
            </Col>
          </Col>
        </Row>
        <hr />
        <Col className="py-1">
          <div>
            <ul className="footer_links d-flex justify-content-evenly">
              <li>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
                  alt=""
                />
                <a href="" className="ps-2">
                  Become a Seller
                </a>
              </li>
              <li>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
                  alt=""
                />
                <a href="" className="ps-2">
                  Advertise
                </a>
              </li>
              <li>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
                  alt=""
                />
                <a href="" className="ps-2">
                  Gift Card
                </a>
              </li>
              <li>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
                  alt=""
                />
                <a href="" className="ps-2">Help Center</a>
              </li>
              <li>
                <a href="">@2007 - 2024 Flipkart.com</a>
              </li>
              <li>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
