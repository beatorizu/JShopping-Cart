const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
	const products = productsList.filter((product) => {
		return ids.includes(product.id);
	});

	return {
		products: products.map((product) => {
			return { name: product.name, category: product.category };
		}),
		promotion: "",
		totalPrice: "",
		discountValue: "",
		discount: "",
	};
}

module.exports = { getShoppingCart };
