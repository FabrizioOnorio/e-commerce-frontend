import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import ProductPage from "./components/ProductPage/ProductPage";
import { productsDB } from "./products";
import { Product } from "./types";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Pay from "./components/Pay/Pay";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
	useEffect(() => {
		const getProducts = async () => {
			setProducts(productsDB);
		};
		getProducts();
	});

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/categories"
					element={<CategoriesPage products={products} />}
				/>
				<Route
					path="/products/:productId"
					element={
						<ProductPage
							products={products}
							setShoppingCart={setShoppingCart}
						/>
					}
				/>
				<Route
					path="/shoppingCart"
					element={<ShoppingCart shoppingCart={shoppingCart} />}
				/>
				<Route path="/pay" element={<Pay />} />
			</Routes>
		</div>
	);
}

export default App;
