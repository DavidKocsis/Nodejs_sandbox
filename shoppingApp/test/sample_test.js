var chai = require('chai');
var expect = chai.expect;
var CartSummary= require(  './../cartSummary.js');

describe ('CartSummary', function()
{
    it('GetSubtotal() should return 0 if no items are passed in', function()
        {
            var cartSummary = new CartSummary();
            expect(cartSummary.getSubtotal([])).to.equal(0);
        });

    it('GetSubTotal() should return correct sum for cart', function()
        {
        var cart = [{
            id: 1,
            quantity: 4,
            price: 50
          }, {
            id: 2,
            quantity: 2,
            price: 30
          }, {
            id: 3,
            quantity: 1,
            price: 40
          }]

          var cartSummary = new CartSummary()
          expect(cartSummary.getSubtotal(cart)).to.eq(300)
        });
});