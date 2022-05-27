import React from "react";
import {  Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";


const Nav = () => {
	return (
		<>
			<Link to="/" className="navbar--logo">
				PORTO
			</Link>
			<div className="navbar">
				<Link to="/">HOME</Link>
				<Link to="/categories">
					CATEGORIES <MdKeyboardArrowDown />
				</Link>
				<Link className="navbar--basket" to="/shoppingCart">
					<BiShoppingBag />
					<MdKeyboardArrowDown />
				</Link>
			</div>
		</>
	);
}

export default Nav;
