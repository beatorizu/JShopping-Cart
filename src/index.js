const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getComboPromotionPrice(product, comboPromotion) {
	let promotion = product.promotions.filter((promotion) =>
		promotion.looks.includes(comboPromotion)
	);
	if (promotion.length === 0) {
		return product.regularPrice;
	}
	return promotion[0].price;
}

function getShoppingCart(ids, productsList) {
	const products = productsList.filter((product) => ids.includes(product.id));
	let comboPromotion =
		promotions[
			Array.from(new Set(products.map((product) => product.category))).length - 1
		];
	let regularPrice = products.reduce((acc, product) => acc + product.regularPrice, 0);
	let totalPrice = products.reduce((acc, product) => acc + getComboPromotionPrice(product, comboPromotion), 0);

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
