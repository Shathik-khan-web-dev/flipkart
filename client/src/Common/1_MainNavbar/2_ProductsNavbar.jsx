import React from "react";
import { Container, Row } from "react-bootstrap";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import logoTwo from "../../Assets/logoTwo.png";
import "../3_CommonCss/Common.css";

const ProductsNavbar = () => {
  return (
    <div className="position-fixed w-100 z-3">
      <Container fluid className="bg-primary ">
        <div className="container p-2 text-center d-flex justify-content-evenly align-items-center">
          <div>
            <img
              src={logoTwo}
              alt=""
              width={80}
              height={40}
              className="image-fluid "
            />
          </div>

          {/* search */}
          <div className="d-flex justify-content-center align-items-center  d-none d-md-flex w-50 p-1 px-3 bg-white shadow">
            <input
              type="text"
              placeholder="Search Products Brand and more"
              className="w-100 border-0 no-focus-outline "
            />
            <BiSearch size={25} className="text-primary" />
          </div>

          {/* login btn */}
          <div>
            <button
              variant="light"
              className=" fw-bold bg-white border-0 p-1 px-4 text-primary">
              Login
            </button>{" "}
          </div>

          {/*  */}
          <div className="d-flex justify-content-center align-items-center text-white  d-none d-md-block">
            <h6 className="text-center py-2">Become a seller</h6>
          </div>

          {/*  */}
          <div className="d-flex justify-content-center  text-center text-white ">
            <h6 className="text-center py-2">More</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
          {/* cart */}
          <div className="d-flex justify-content-center text-center text-white ">
            <FaShoppingCart size={20} className="fw-bold mt-2" />

            <h6 className="text-center py-2"> Cart</h6>
          </div>
        </div>
      </Container>

      <Row
        fluid
        className="bg-white py-2 gap-4 d-flex flex-nowrap overflow-auto justify-content-center align-items-center text-center shadow-sm">
        <span >
          Electronic's
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Tv's & Appliances 
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Men
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Women
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Baby & Kids
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Home & Furniture
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>
          Sports, Books & More
          <BiChevronDown
            size={15}
            className="fw-bold"
            style={{ color: "#c1c2c5ff" }}
          />
        </span>
        <span>Flights</span>
        <span>Offer Zone</span>
      </Row>
    </div>
  );
};

export default ProductsNavbar;
