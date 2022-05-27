import React from "react";
import ProductCard from "../Productcard/Productcard";
import { IProductsListProps } from "../../types";

const ProductsList = ({ selectedCategory }: IProductsListProps) => {
	return (
		<div className="products--list">
			{selectedCategory.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsList;
