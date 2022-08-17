import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { INavProps } from "../../types";

const Nav = ({ shoppingCart }: INavProps) => {
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
					<p className={shoppingCart.length > 0 ? "navbar--counter" : ""}>{shoppingCart.length > 0 ? shoppingCart.length : ""}</p>
				</Link>
			</div>
		</>
	);
};

export default Nav;
