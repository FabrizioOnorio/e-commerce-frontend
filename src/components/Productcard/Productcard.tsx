import React from "react";
import { Link } from "react-router-dom";
import { IProductCardProps } from "../../types";

const ProductCard = ({ product }: IProductCardProps) => {
	return (
		<div className="product--card">
			<Link to={`/products/${product.id}`}>
				<img src={product.image} alt={product.name} />
				<h3>{product.name}</h3>
				<p>{product.price} nok</p>
			</Link>
		</div>
	);
};

export default ProductCard;
