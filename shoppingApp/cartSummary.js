function CartSummary() {}

CartSummary.prototype.getSubtotal = function(cart) {
  if (cart.length) {
    return cart.reduce(function(subtotal, item) {
      return subtotal += (item.quantity * item.price);
    }, 0);
  }

  return 0;
};

module.exports = CartSummary;