'use strict';
describe('carts page', function() {
  it('tests carts page', function() {
    browser.get('http://localhost:8090/#!/cart');
    var removeButton = browser.findElement(by.tagName('button')[0]);
    loginButton.click();
    expect(browser.getLocationAbsUrl()).toBe('/cart');
  });
});
