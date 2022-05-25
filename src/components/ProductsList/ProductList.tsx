import React from "react";
import ProductCard from "../Productcard/Productcard";
import { IProductListProps } from "../../types"

const ProductList = ({ products }: IProductListProps) => {
	return (
		<div className="App">
			<h1>List of products</h1>
			<div>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
