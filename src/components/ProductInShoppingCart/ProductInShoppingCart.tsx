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
		<div className="product--in--cart">
			<img
				className="product--in--cart--img"
				src={productInCart.image}
				alt={productInCart.name}
			/>
			<section>
				<Link to={`/products/${productInCart.id}`}>
					<h3>{productInCart.name}</h3>
				</Link>
				<p>NOK {productInCart.price}</p>
				<button className="product--in--cart--button" onClick={handleClick}>
					Remove item
				</button>
			</section>
		</div>
	);
};

export default ProductInShoppingcart;
