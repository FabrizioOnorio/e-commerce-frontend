import React, { useEffect, useState } from "react";
import { IproductPageProps } from "../../types";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../types";
import { v4 as uuid } from "uuid";
import { BiShoppingBag } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";

const ProductPage = ({
	products,
	setShoppingCart,
	isActive,
	setIsActive,
}: IproductPageProps) => {
	let { productId } = useParams();
	const [selectedProduct, setSelectedProduct] = useState<Product>();
	useEffect(() => {
		const product = products.find(
			(product) => product.id === Number(productId)
		);

		if (product !== undefined) {
			product.shoppingCardId = uuid();
		}
		setSelectedProduct(product);
	}, [productId, products]);

	const handleClick = () => {
		if (selectedProduct !== undefined) {
			setSelectedProduct((prev) => {
				if (prev) {
					return { ...prev, shoppingCardId: uuid() };
				}
			});
			console.log(selectedProduct);
			console.log(selectedProduct.shoppingCardId);
			// //selectedProduct.shoppingCardId = Math.floor(
			// 	//Math.random() * 10000
			// ).toString();
			setShoppingCart((prevState) => [...prevState, selectedProduct]);
			setIsActive(true);
			setTimeout(() => {
				setIsActive(false);
			}, 2000);
		}
	};

	return (
		<div className="product--page">
			<section className="categories--path">
				HOME {" > "} {selectedProduct?.name}
			</section>
			<div className={isActive ? "added--to--basket" : "add--to--basket"}>
				<p>
					<GiConfirmed /> You added {selectedProduct?.name} to your{" "}
					<Link to="/shoppingCart">shopping cart</Link>{" "}
				</p>
			</div>
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
						<strong className="product--page--availability">
							{selectedProduct?.quantity !== undefined &&
							selectedProduct.quantity > 0
								? "IN STOCK"
								: "OUT OF STOCK"}
						</strong>
					</p>
					<button className="buy--button" onClick={handleClick}>
						<BiShoppingBag /> ADD TO CART
					</button>
				</div>
			</section>
		</div>
	);
};

export default ProductPage;
