import React from "react";
import HomeNavbar from "../../Common/1_MainNavbar/1_HomeNavbar";
import { HomeNavImages } from "../../Assets/Images/1_Home/Index";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import Footer from "../../Common/Footer";
import { BiChevronDown } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

const Home = () => {
  const nv0 = HomeNavImages[0];
  const nv2 = HomeNavImages[2];
  const nv3 = HomeNavImages[3];
  const nv4 = HomeNavImages[4];
  const nv5 = HomeNavImages[7];
  const nv6 = HomeNavImages[8];

  const navigate = useNavigate();

  const handleGrocery = () => {
    navigate("/grocery");
  };

  const handleMobile = () => {
    navigate("/mobiles");
  };

  const handleAppliances = () => {
    navigate("/appliances");
  };

  const handleTravel = () => {
    navigate("/travel");
  };
  return (
    <>
      <Container fluid className="overflow-hidden home_page">
        <Row>
          <HomeNavbar />
        </Row>
        <div className=" pt-5 ">
          {/* Home Nav Items */}
          <div className=" mt-4 ">
            <div
              className="bg-white pt-2 gap-md-5 gap-3 d-flex justify-content-md-center 
            overflow-x-scroll product_bottomNav px-3">
              <div className="d-md-none pt-3">
                <IoIosArrowBack className="fs-3 opacity-50" />
              </div>

              <div className="" onClick={handleGrocery}>
                <img src={nv0.src} height={60} alt="" />

                <h6 className="text-center py-2 d-none d-md-flex">Grocery</h6>
              </div>

              <div className="" onClick={handleMobile}>
                <img
                  src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
                  alt=""
                  height={60}
                />

                <h6 className="text-center py-2 d-none d-md-flex">Mobiles</h6>
              </div>

              <div className="text-center">
                <img src={nv2.src} alt="boy&girl" height={60} width={70} />

                <div className="d-flex justify-content-center d-none d-md-flex">
                  <h6 className="text-center py-2 ">Fashion</h6>
                  <BiChevronDown size={25} className="fw-bold mt-2" />
                </div>
              </div>

              <div className="text-center ">
                <img src={nv3.src} alt="boy&girl" height={60} />

                <div className="d-flex justify-content-center d-none d-md-flex ">
                  <h6 className="text-center py-2 ">Electronics</h6>
                  <BiChevronDown size={25} className="fw-bold mt-2" />
                </div>
              </div>

              <div className="text-center ">
                <img src={nv4.src} alt="boy&girl" height={60} />

                <div className="d-flex justify-content-center d-none d-md-flex">
                  <h6 className="text-center py-2 ">Home & Furniture</h6>
                  <BiChevronDown size={25} className="fw-bold mt-2" />
                </div>
              </div>

              <div className="text-center ">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
                  alt=""
                  height={60}
                  onClick={handleAppliances}
                />

                <h6 className="text-center py-2 d-none d-md-flex">
                  Appliances
                </h6>
              </div>

              <div className="text-center ">
                <img
                  src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
                  alt=""
                  height={60}
                  onClick={handleTravel}
                />

                <h6 className=" text-center py-2 d-none d-md-flex">Travel</h6>
              </div>

              <div className="text-center ">
                <img src={nv5.src} alt="boy&girl" height={60} />

                <div className="d-flex justify-content-center d-none d-md-flex">
                  <h6 className="text-center py-2">Beauty, Toys & More</h6>
                  <BiChevronDown size={25} className="fw-bold mt-2" />
                </div>
              </div>

              <div className="text-center">
                <img src={nv6.src} alt="boy&girl" height={60} width={90} />

                <div className="d-flex justify-content-center d-none d-md-flex ">
                  <h6 className="text-center py-2 ">Two Wheelers </h6>
                  <BiChevronDown size={25} className="fw-bold mt-2" />
                </div>
              </div>

              <div className="d-md-none d-md-none d-flex justify-content-center align-items-center">
                <IoIosArrowForward className="fs-3 opacity-50" />
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div>
            <Carousel
              className="section_2 pt-3"
              indicators={false}
              controls={true}>
              <Carousel.Item interval={1000}>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20"
                  alt="First slide"
                  className="img-fluid" // Changed from "image-fluid" to "img-fluid"
                />
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/35d047aa7dabab86.png?q=20"
                  alt="Second slide"
                  className="img-fluid"
                />
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e56874ad46434be.jpg?q=20"
                  alt="Third slide"
                  className="img-fluid"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* axis ad */}
          <div>
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/be895694c0ed175b.jpg?q=20"
              alt=""
              height="100%"
              width="100%"
              className="pt-3"
            />
          </div>

          {/* Best of Electronics */}
          <div className="pt-3  d-flex gap-3 my-5">
            <div className="bg-white w-75" width="75%">
              <div className="p-3 d-flex justify-content-between">
                <h5>Best of Electronics</h5>
                <h5>Best of Electronics</h5>
              </div>
              <div className="border d-flex">
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
              </div>
            </div>
            <div className="bg-info col-2  w-25">
              <div>hi</div>
            </div>
          </div>
        </div>
      </Container>
      <Footer className=" d-none d-md-flex z-n5" />
    </>
  );
};

export default Home;
