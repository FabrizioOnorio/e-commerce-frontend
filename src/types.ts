export interface Product {
	id: number;
	name: string;
	description: string;
	image: string;
	quantity: number;
	price: number;
	category: string;
	shoppingCardId?: string;
}

export interface ICategoriesPageprops {
	products: Product[];
}

export interface IProductsListProps {
	selectedCategory: Product[];
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
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface IProductInShoppingcartProps {
	productInCart: Product;
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
}
