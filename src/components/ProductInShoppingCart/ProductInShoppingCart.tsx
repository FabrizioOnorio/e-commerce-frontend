import React from "react";
import { Link } from "react-router-dom";
import { IProductInShoppingcartProps } from "../../types";

const ProductInShoppingcart = ({
	productInCart,
}: IProductInShoppingcartProps) => {
	return (
		<div className="App">
			<h3>{productInCart.name}</h3>
			<p>{productInCart.price} nok</p>
			<Link to={`/products/${productInCart.id}`}>Check the product out</Link>
		</div>
	);
};

export default ProductInShoppingcart;
