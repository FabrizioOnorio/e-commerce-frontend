import React from "react";
import ProductList from "../../components/ProductsList/ProductList";
import { ICategoriesPageprops } from "../../types"

const CategoriesPage = ({ products }: ICategoriesPageprops) => {
	return (
		<div className="App">
			<h1> different categories</h1>
			<ProductList products={products} />
		</div>
	);
};

export default CategoriesPage;
