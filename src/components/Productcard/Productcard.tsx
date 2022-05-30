import React from "react";
import { Link } from "react-router-dom";
import { IProductCardProps } from "../../types";
import { BiShoppingBag } from "react-icons/bi";
import { v4 as uuid } from "uuid";

const ProductCard = ({
	product,
	setShoppingCart,
	setIsActive,
}: IProductCardProps) => {
	const handleClick = (event: React.FormEvent) => {
		event.stopPropagation();
		if (product !== undefined) {
			const productInCart = { ...product };
			productInCart.shoppingCardId = uuid();
			setShoppingCart((prevState) => [...prevState, productInCart]);
			setIsActive(true);
			setTimeout(() => {
				setIsActive(false);
			}, 2000);
		}
	};
	return (
		<div className="product--card">
			<div
				className={product.quantity < 1 ? "product--card--basket--none" : ""}
			>
				<BiShoppingBag
					className="product--card--basket"
					onClick={handleClick}
				/>
			</div>
			<Link to={`/products/${product.id}`}>
				<img src={product.image} alt={product.name} />
				<h3>{product.name}</h3>
				<p>{product.price} nok</p>
			</Link>
		</div>
	);
};

export default ProductCard;
