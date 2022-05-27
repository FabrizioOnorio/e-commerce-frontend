import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="homepage">
			<section className="homepage--text">
				<h2>Spring/Summer Season </h2>
				<h1>up to 50% OFF</h1>
				<div className="homepage--text--sales">
					<h3>
						starting at{" "}
						<strong className="homepage--sales--price">NOK 500</strong>{" "}
					</h3>
					<Link className="homepage--shop--button" to="/categories">
						SHOP NOW
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
