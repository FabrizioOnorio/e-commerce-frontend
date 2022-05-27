import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ICategoriesPageprops } from "../../types";

const CategoriesPage = ({ products }: ICategoriesPageprops) => {
	return (
		<div className="categories">
			<section className="categories--adds">
				<img src="/images/bike-add.png" alt="bike on sales" />
				<img src="/images/sales-add.png" alt="sales banner" />
			</section>
			<section>HOME {" > "} ALL</section>
			<ProductsList products={products} />
		</div>
	);
};

export default CategoriesPage;
