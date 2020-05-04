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
	let totalPrice = 0;
	products.forEach((product) => {
		let promotion = product.promotions.filter((promotion) =>
			promotion.looks.includes(comboPromotion)
		);

		if (promotion.length === 0) {
			totalPrice += product.regularPrice;
		} else {
			totalPrice += promotion[0].price;
		}
	});

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
