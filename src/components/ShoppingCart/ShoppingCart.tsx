import React from "react";
import { useNavigate } from "react-router-dom";
import { IShoopingcartProp } from "../../types";
import ProductInShoppingcart from "../ProductInShoppingCart/ProductInShoppingCart";

const BEAddress =
	process.env.NODE_ENV === "development"
		? "http://localhost:8000"
		: "https://e-commerce-backend-fabrizio.herokuapp.com";

const ShoppingCart = ({ shoppingCart, setShoppingCart }: IShoopingcartProp) => {
	const navigate = useNavigate();

	const handleClick = async () => {
		let hasAllProducts = true;
		await Promise.all(
			shoppingCart.map(async (product) => {
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ quantity: 1 }),
				};
				const response = await fetch(
					`${BEAddress}/api/products/${product.id}`,
					requestOptions
				);
				const data = await response.json();
				if (data.message) {
					alert(data.message);
					hasAllProducts = false;
				} else {
					navigate("/pay");
				}
			})
		);

		hasAllProducts && setShoppingCart((prev) => []);
	};
	return (
		<div className="shopping--cart--page">
			<div className="shopping--cart">
				<div className="shopping--cart--header">
					<h3>Order Summary</h3>
					<button
						onClick={handleClick}
						className={
							shoppingCart.length > 0
								? "shopping--cart--pay"
								: "shopping--cart--pay--hide"
						}
					>
						Pay
					</button>
				</div>
				<p className="shopping--cart--total">
					total price:{" "}
					{shoppingCart.reduce((prev, curr) => prev + curr.price, 0)}
				</p>
				<p className="shopping--cart--count">
					{shoppingCart.length > 0 ? shoppingCart.length : ""}{" "}
					{shoppingCart.length > 0
						? "Item in Cart"
						: "No items in the cart yet."}
				</p>
				{shoppingCart.map((productInCart) => (
					<ProductInShoppingcart
						productInCart={productInCart}
						setShoppingCart={setShoppingCart}
						key={productInCart.shoppingCardId}
					/>
				))}
			</div>
		</div>
	);
};

export default ShoppingCart;
