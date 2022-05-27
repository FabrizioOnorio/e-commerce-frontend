import React from "react";
import {  Link } from "react-router-dom";


const Nav = () => {
	return (
		<div className="navbar">
			<Link to="/">HOME</Link>
			<Link to="/categories">
				CATEGORIES
			</Link>
			<Link to="/shoppingCart">BASKET</Link>
		</div>
	);
}

export default Nav;
