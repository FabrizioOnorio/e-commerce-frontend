import React, { useEffect, useState } from "react";
import { IproductPageProps } from "../../types";
import { useParams } from "react-router-dom";
import { Product } from "../../types";
import { v4 as uuid } from "uuid";

const ProductPage = ({ products, setShoppingCart }: IproductPageProps) => {
	let { productId } = useParams();
	const [selectedProduct, setSelectedProduct] = useState<Product>();
	useEffect(() => {
		const product = products.find(
			(product) => product.id === Number(productId)
		);
		setSelectedProduct(product);
	}, [productId, products]);

	const handleClick = () => {
		if (selectedProduct !== undefined) {
			selectedProduct.shoppingCardId = uuid();
			setShoppingCart((prevState) => [...prevState, selectedProduct]);
		}
	};

	return (
		<div className="product--page">
			<section className="categories--path">
				HOME {" > "} {selectedProduct?.name}
			</section>
			<section className="product--page--details">
				<div className="product--page--img">
					<img src={selectedProduct?.image} alt={selectedProduct?.name} />
				</div>
				<div className="product--page--text">
					<h1>{selectedProduct?.name}</h1>
					<h2>NOK {selectedProduct?.price}</h2>
					<p>{selectedProduct?.description}</p>
					<p>
						AVAILABILITY:{" "}
						{selectedProduct?.quantity !== undefined &&
						selectedProduct.quantity > 0
							? "IN STOCK"
							: "OUT OF STOCK"}
					</p>
					<button className="buy--button" onClick={handleClick}>ADD TO CART</button>
				</div>
			</section>
		</div>
	);
};

export default ProductPage;
