'use strict';
describe('App route test', function() {
  var scope, state, location;
  
  beforeEach(module('shopping-cart'));

  beforeEach(
    inject(function($rootScope, $state, $location) {
      scope = $rootScope;
      state = $state;
      location = $location;
    })
  );

  it('should go to routes', function() {
    state.go('cart');
    scope.$digest();
    expect(location.$$absUrl).toBe('http://server/#!/cart')
  });
});
