import React from "react";
import { GroceryNav, GroceryAds } from "../../Assets/Images/2_Grocery/Index";
import { Container } from "react-bootstrap";
import { BiChevronDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GroceryNavbar = () => {
  return (
    <div className="position-fixed w-100 z-3 mb-5">
      <Container fluid style={{ backgroundColor: "#26a541ff" }} className="">
        <div className="container me-5 text-center d-flex justify-content-evenly align-items-center">
          <div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/grocery-logo_fb537a.svg"
              alt=""
              height={35}
              width={100}
              className="p-1"
            />
          </div>
          {/* search */}
          <div className="d-none d-md-flex justify-content-center align-items-center  w-50 p-1 px-3 bg-white shadow">
            <input
              type="text"
              placeholder="Search Grocery Products"
              className="w-100 border-0 no-focus-outline "
            />
            <BiSearch size={25} style={{ color: "#26a541ff" }} className="" />
          </div>
          {/* drop down */}
          <div className="d-flex justify-content-center text-center text-white ">
            <MdLocationOn size={25} className="fw-bold mt-md-2" />

            <h6 className="text-center py-2 d-none d-md-flex">Select city</h6>
            <BiChevronDown
              size={20}
              className="fw-bold mt-2 d-none d-md-flex"
            />
          </div>
          {/* login btn */}
          <div>
            <button
              variant="light"
              className="px-md-5 fw-bold bg-white border-0 py-0 px-1"
              style={{ color: "#26a541ff" }}>
              Login
            </button>{" "}
          </div>
          {/*  */}
          <div className="d-none d-md-flexjustify-content-center text-center text-white  ">
            <h6 className="text-center py-2 ">More</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
          {/* cart */}
          <div className="d-flex justify-content-center text-center text-white ">
            <FaShoppingCart size={20} className="fw-bold mt-2" />

            <h6 className="text-center py-2 d-none d-md-flex">Cart</h6>
          </div>

          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk_goto_home_logo_small_5b9cdd.svg"
            alt=""
            height={65}
            // width={100}
            className="p-1 d-none d-md-flex"
            style={{ background: "#1e8434ff" }}
          />
        </div>
      </Container>

      <div className="bg-white product_bottomNav shadow-sm d-flex justify-content-md-center overflow-x-scroll pt-2 gap-4 px-3">
        <div className="d-md-none d-flex justify-content-center align-items-center">
          <IoIosArrowBack className="fs-3 opacity-50" />
        </div>
        {/* <div className="bg-white product_bottomNav py-2 d-flex justify-content-md-center overflow-x-scroll gap-4 px-3 shadow-sm"> */}
        {GroceryNav.map((Grocery) => (
          <div
            key={Grocery.id}
            className=" d-flex flex-column justify-content-center align-items-center">
            <img
              src={Grocery.src}
              alt={Grocery.alt}
              height={60}
              width={70}
              className=""
            />

            <div className="justify-content-center d-none d-md-flex">
              <h6 className="text-center py-2">{Grocery.title}</h6>
              <BiChevronDown size={20} className="mt-2" />
            </div>
          </div>
        ))}

        <div className="d-md-none d-md-none d-flex justify-content-center align-items-center">
          <IoIosArrowForward className="fs-3 opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default GroceryNavbar;
