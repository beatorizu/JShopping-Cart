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
	let comboPromotion = getComboPromotion(Array.from(new Set(products.map(product => product.category))));
	let regularPrice = products.reduce((acc, product) => acc + product.regularPrice, 0);
	let totalPrice = products.reduce((acc, product) => {
		let promotion = product.promotions.filter((promotion) =>
			promotion.looks.includes(comboPromotion)
		);
		if (promotion.length === 0) {
			return acc + product.regularPrice;
		}
		return acc + promotion[0].price;
	}, 0);

	return {
		products: products.map((product) => {
			return { name: product.name, category: product.category };
		}),
		promotion: comboPromotion,
		totalPrice: `${totalPrice.toFixed(2)}`,
		discountValue: `${(regularPrice - totalPrice).toFixed(2)}`,
		discount: `${((1 - totalPrice / regularPrice) * 100).toFixed(2)}%`,
	};
}

module.exports = { getShoppingCart };
