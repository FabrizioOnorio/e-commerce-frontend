import React from "react";
import ProductCard from "../Productcard/Productcard";
import { IProductsListProps } from "../../types";

const ProductsList = ({
	selectedCategory,
	setShoppingCart,
	setIsActive,
}: IProductsListProps) => {
	return (
		<div className="products--list">
			{selectedCategory.map((product) => (
				<ProductCard
					setIsActive={setIsActive}
					setShoppingCart={setShoppingCart}
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default ProductsList;
