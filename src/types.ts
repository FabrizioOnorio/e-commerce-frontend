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

export interface INavProps {
	shoppingCart: Product[];
}

export interface ICategoriesPageprops {
	products: Product[];
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProductsListProps {
	selectedCategory: Product[];
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProductCardProps {
	product: Product;
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IproductPageProps {
	products: Product[];
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IShoopingcartProp {
	shoppingCart: Product[];
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface IProductInShoppingcartProps {
	productInCart: Product;
	setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
}
