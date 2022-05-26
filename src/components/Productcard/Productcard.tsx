import React from "react";
import { Link } from "react-router-dom";
import { IProductCardProps } from "../../types";

const ProductCard = ({ product }: IProductCardProps) => {
	return (
		<div className="App">
			<img src={product.image} alt={product.name} />
			<h3>{product.name}</h3>
			<p>{product.description}</p>
			<p>Quantities available:{product.quantity > 0 ? product.quantity : "Product not available" }</p>
			<p>{product.price} nok</p>
			<Link to={`/products/${product.id}`}>More about the product</Link>
		</div>
	);
};

export default ProductCard;
