import React from "react";
import logo from "../../Assets/logoOne.png";
import { Container } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown, AiOutlineShop } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import "../3_CommonCss/Common.css";

const HomeNavbar = () => {
  return (
    <Container
      fluid
      className="p-2 d-flex justify-content-evenly bg-white position-fixed z-3 border border-2">
      <span>
        {" "}
        <img
          src={logo}
          alt=""
          width={100}
          height={50}
          className="image-fluid "
        />
      </span>

      <div className="search_bar justify-content-center align-items-center w-50 py-0 my-0 px-3 rounded-3 d-none d-md-flex mt-1">
        <BiSearch size={25} style={{ color: "grey" }} className="" />

        <input
          type="text"
          placeholder="Search for Products, Brand and More"
          className="w-100 border-0 no_focus_outline search_input fs-5 ms-1"
        />
      </div>

      <div className="d-flex justify-content-between align-items-center px-2">
        <CgProfile size={20} />
        <span className="px-2"> Login</span>
        <AiOutlineDown size={12} className="d-none d-md-flex" />
      </div>

      <div className="d-flex justify-content-between align-items-center px-2">
        <FiShoppingCart size={20} />
        <span className="px-2 d-none d-md-block"> Cart</span>
      </div>

      <div className="d-flex justify-content-between align-items-center px-2">
        <AiOutlineShop size={23} />
        <span className="px-2 d-none d-md-block">Become a Seller</span>
      </div>

      <div className="d-flex justify-content-between align-items-center px-2 d-none d-md-block">
        <BsThreeDotsVertical size={20} className="mt-3" />
      </div>
    </Container>
  );
};

export default HomeNavbar;
