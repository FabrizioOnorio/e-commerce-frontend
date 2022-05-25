import React, { useEffect, useState } from "react";
import { IproductPageProps } from "../../types";
import { useParams } from "react-router-dom";
import { Product } from "../../types";

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
			setShoppingCart((prevState) => [...prevState, selectedProduct]);
		}
	};

	return (
		<div className="App">
			<h1>{selectedProduct?.name}</h1>
			<img src={selectedProduct?.image} alt={selectedProduct?.name} />
			<p>{selectedProduct?.description}</p>
			<p>Quantity available: {selectedProduct?.quantity}</p>
			<p>price: {selectedProduct?.price} nok</p>
			<p>Category: {selectedProduct?.category}</p>
			<button onClick={handleClick}>Buy</button>
		</div>
	);
};

export default ProductPage;
