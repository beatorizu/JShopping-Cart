const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getComboPromotion(looks) {
	if (looks.length == 1) {
		return 'SINGLE LOOK';
	}
	if (looks.length == 2) {
		return 'DOUBLE LOOK';
	}
	if (looks.length == 3) {
		return 'TRIPLE LOOK';
	}
	return 'FULL LOOK';
}

function getShoppingCart(ids, productsList) {
	const products = productsList.filter((product) => {
		return ids.includes(product.id);
	});
	let promotion = getComboPromotion(Array.from(new Set(products.map(product => product.category))));

	return {
		products: products.map((product) => {
			return { name: product.name, category: product.category };
		}),
		promotion: promotion,
		totalPrice: '',
		discountValue: '',
		discount: '',
	};
}

module.exports = { getShoppingCart };
