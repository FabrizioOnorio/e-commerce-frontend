import React from "react";
import { Link } from "react-router-dom";
import { IShoopingcartProp } from "../../types";
import ProductInShoppingcart from "../ProductInShoppingCart/ProductInShoppingCart";

const ShoppingCart = ({ shoppingCart }: IShoopingcartProp) => {
	return (
		<div className="App">
			{shoppingCart.map((productInCart) => (
				<ProductInShoppingcart productInCart={productInCart} />
			))}
			<p>
				total price: {shoppingCart.reduce((prev, curr) => prev + curr.price, 0)}
			</p>
			<p>quantity of items ordered: {shoppingCart.length}</p>

			<Link to={"/pay"}>Pay</Link>
		</div>
	);
};

export default ShoppingCart;
