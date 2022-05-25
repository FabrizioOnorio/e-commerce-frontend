export interface Product {
	id: number;
	name: string;
	description: string;
	image: string;
	quantity: number;
	price: number;
	category: string;
}

export interface ICategoriesPageprops {
	products: Product[];
}

export interface IProductListProps {
	products: Product[];
}

export interface IProductCardProps {
	product: Product;
}

export interface IproductPageProps {
	products: Product[];
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface IShoopingcartProp {
	shoppingCart: Product[];
}

export interface IProductInShoppingcartProps {
	productInCart: Product;
}