import React from "react";
import { Link } from "react-router-dom";
import { IProductInShoppingcartProps } from "../../types";

const ProductInShoppingcart = ({
	productInCart,
	setShoppingCart,
}: IProductInShoppingcartProps) => {
	const handleClick = () => {
		setShoppingCart((prevState) =>
			prevState.filter(
				(item) => item.shoppingCardId !== productInCart.shoppingCardId
			)
		);
	};
	return (
		<div className="App">
			<Link to={`/products/${productInCart.id}`}>
				<h3>{productInCart.name}</h3>
			</Link>
			<p>{productInCart.price} nok</p>
			<button onClick={handleClick}>Remove item</button>
		</div>
	);
};

export default ProductInShoppingcart;
