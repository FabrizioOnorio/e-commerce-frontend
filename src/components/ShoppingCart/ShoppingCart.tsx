import React from "react";
import { Link } from "react-router-dom";
import { IShoopingcartProp } from "../../types";
import ProductInShoppingcart from "../ProductInShoppingCart/ProductInShoppingCart";

const ShoppingCart = ({ shoppingCart, setShoppingCart }: IShoopingcartProp) => {
  const handleClick = () =>{
    
  }
	return (
		<div className="shopping--cart--page">
			<div className="shopping--cart">
				<div className="shopping--cart--header">
					<h3>Order Summary</h3>
					<Link onClick={handleClick} className={shoppingCart.length > 0 ?"shopping--cart--pay" : "shopping--cart--pay--hide"} to={"/pay"}>
						Pay
					</Link>
				</div>
				<p className="shopping--cart--total">
					total price:{" "}
					{shoppingCart.reduce((prev, curr) => prev + curr.price, 0)}
				</p>
				<p className="shopping--cart--count">
					{shoppingCart.length > 0 ? shoppingCart.length : ""}{" "}
					{shoppingCart.length > 0 ? "Item in Cart" : "No items in the cart yet."}
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
