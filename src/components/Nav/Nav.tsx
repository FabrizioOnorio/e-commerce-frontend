import React from "react";
import {  Link } from "react-router-dom";


const Nav = () => {
	return (
		<div className="App">
			<Link to="/">Home</Link>
			<Link to="/categories">Categories</Link>
			<Link to="/shoppingCart">Basket</Link>
		</div>
	);
}

export default Nav;
