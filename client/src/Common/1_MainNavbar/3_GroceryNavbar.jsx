import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

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
          <div className="d-flex justify-content-center align-items-center  w-50 p-1 px-3 bg-white shadow">
            <input
              type="text"
              placeholder="Search Grocery Products"
              className="w-100 border-0 no-focus-outline "
            />
            <BiSearch size={25} style={{ color: "#26a541ff" }} className="" />
          </div>
          {/* drop down */}
          <div className="d-flex justify-content-center text-center text-white ">
            <MdLocationOn size={25} className="fw-bold mt-2" />

            <h6 className="text-center py-2">Select city</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
          {/* login btn */}
          <div>
            <button
              variant="light"
              className="px-5 fw-bold bg-white border-0 py-0"
              style={{ color: "#26a541ff" }}>
              Login
            </button>{" "}
          </div>
          {/*  */}
          <div className="d-flex justify-content-center text-center text-white ">
            <h6 className="text-center py-2">More</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
          {/* cart */}
          <div className="d-flex justify-content-center text-center text-white ">
            <FaShoppingCart size={20} className="fw-bold mt-2" />

            <h6 className="text-center py-2">Cart</h6>
          </div>

          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk_goto_home_logo_small_5b9cdd.svg"
            alt=""
            height={65}
            // width={100}
            className="p-1"
            style={{ background: "#1e8434ff" }}
          />
        </div>
      </Container>

      <div className="bg-white pt-2 gap-4 d-flex flex-wrap justify-content-center align-items-center text-center">
        <div className="">
          <img src={Staples} alt="boy&girl" height={60} width={70} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Staples</h6>
            <BiChevronDown size={20} className="mt-2" />
          </div>
        </div>

        <div className="">
          <img src={Snacks} alt="boy&girl" height={60} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Snacks & Beverages</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="text-center">
          <img src={PackedFood} alt="boy&girl" height={60} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Packed Food</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="">
          <img src={Personal} alt="boy&girl" height={60} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Personal & Baby Care</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="">
          <img src={HouseHold} alt="boy&girl" height={60} width={90} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Household Care</h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="">
          <img src={Dairy} alt="boy&girl" height={60} width={90} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Dairy & Eggs </h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="">
          <img src={Home} alt="boy&girl" height={60} width={90} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Home & Kitchen </h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>

        <div className="">
          <img src={Fruits} alt="boy&girl" height={60} width={90} />

          <div className="d-flex justify-content-center ">
            <h6 className="text-center py-2">Fruits & Vegetables </h6>
            <BiChevronDown size={20} className="fw-bold mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryNavbar;
