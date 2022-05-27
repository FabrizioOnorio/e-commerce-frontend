import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList/ProductsList";
import { ICategoriesPageprops } from "../../types";
import { Product } from "../../types";

const CategoriesPage = ({ products }: ICategoriesPageprops) => {
	const [selectedCategory, setSelectedCategory] = useState<Product[]>([]);
	const [pathCategory, setPathCategory] = useState("ALL");
	useEffect(() => {
		setSelectedCategory(products);
	}, [products]);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const element = e.currentTarget as HTMLInputElement;
		const category = element.value;
		if (category === "all") {
			setSelectedCategory(products);
		}
		if (category === "woman") {
			setSelectedCategory(
				products.filter((product) => product.category === "1")
			);
			setPathCategory("WOMAN");
		}
		if (category === "mens") {
			setSelectedCategory(
				products.filter((product) => product.category === "2")
			);
			setPathCategory("MENS");
		}
		if (category === "kids") {
			setSelectedCategory(
				products.filter((product) => product.category === "3")
			);
			setPathCategory("KIDS");
		}
	};

	return (
		<div className="categories">
			<section className="categories--adds">
				<img src="/images/bike-add.png" alt="bike on sales" />
				<img src="/images/sales-add.png" alt="sales banner" />
			</section>
			<section className="categories--path">
				HOME  {" > "}
				{pathCategory}
			</section>
			<div className="categories--products">
				<section className="categories--sidebar">
					<ul className="categories--sidebar--ul">
						<li>
							<button
								className="categories--sidebar--button"
								value="all"
								onClick={handleClick}
							>
								<strong>ALL</strong>
							</button>
						</li>
						<li>
							<button
								className="categories--sidebar--button category"
								value="woman"
								onClick={handleClick}
							>
								Woman
							</button>
						</li>
						<li>
							<button
								className="categories--sidebar--button category"
								value="mens"
								onClick={handleClick}
							>
								Mens
							</button>
						</li>
						<li>
							<button
								className="categories--sidebar--button category"
								value="kids"
								onClick={handleClick}
							>
								Kids
							</button>
						</li>
					</ul>
				</section>
				<ProductsList selectedCategory={selectedCategory} />
			</div>
		</div>
	);
};

export default CategoriesPage;
