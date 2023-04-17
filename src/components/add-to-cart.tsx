/** @jsxImportSource react */

import { addItemToCart } from '../stores/cart';

export const AddToCart = ({ item }: { item: ShopItem }) => {
	return (
		<button className="big-link" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
};
