import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { Product } from "./types";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Pay from "./components/PayPage/PayPage";

const BEAddress =
	process.env.NODE_ENV === "development"
		? "http://localhost:8000"
		: "https://e-commerce-backend-fabrizio.herokuapp.com";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			fetch(`${BEAddress}/api/products`)
				.then((response) => response.json())
				.then((response) => {
					setProducts(response);
				});
		};
		getProducts();
	}, []);

	return (
		<div className="App">
			<Nav shoppingCart={shoppingCart} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/categories"
					element={
						<CategoriesPage
							products={products}
							setShoppingCart={setShoppingCart}
							isActive={isActive}
							setIsActive={setIsActive}
						/>
					}
				/>
				<Route
					path="/products/:productId"
					element={
						<ProductPage
							products={products}
							setShoppingCart={setShoppingCart}
							isActive={isActive}
							setIsActive={setIsActive}
						/>
					}
				/>
				<Route
					path="/shoppingCart"
					element={
						<ShoppingCart
							shoppingCart={shoppingCart}
							setShoppingCart={setShoppingCart}
						/>
					}
				/>
				<Route path="/pay" element={<Pay />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
