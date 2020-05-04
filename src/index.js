const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
  return {
    products: [],
    promotion: "",
    totalPrice: "",
    discountValue: "",
    discount: "",
  };
}

module.exports = { getShoppingCart };
