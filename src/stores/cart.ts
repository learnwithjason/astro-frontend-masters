import { computed, map } from 'nanostores';

export const cart = map<Record<number, CartStore>>({});

export function addItemToCart(item: ShopItem) {
	const cartItem = cart.get()[item.id];
	const quantity = cartItem ? cartItem.quantity : 0;

	cart.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}

export const subtotal = computed(cart, (entries) => {
	let subtotal = 0;
	Object.values(entries).forEach((entry) => {
		subtotal += entry.quantity * entry.item.price;
	});

	return subtotal;
});
