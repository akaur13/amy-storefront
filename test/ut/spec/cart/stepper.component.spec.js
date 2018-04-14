'use strict';
describe('stepper component test', function() {
  var element, scope, compile, mockgetData, vm;

  mockgetData = {
    fetchAll: function() {
    }
  };

  beforeEach(module('shopping-cart'));

  beforeEach(
    inject(function($rootScope, $compile) {
      compile = $compile;
      scope = $rootScope.$new();
      element = '<stepper quantity="1"></cart>';
      element = $compile(element)(scope);
      scope.$digest();
      scope = element.isolateScope();
      vm = scope.$ctrl;
    })
  );

  it('can stepup', function() {
    var vm = element.isolateScope().$ctrl; 
    expect(vm.quantity).toBe(1);
    expect(element.find('button[id=stepUp]').length).toBe(1);
    element.find('button[id=stepUp]').trigger('click');
    scope.$digest();
    expect(vm.quantity).toBe(1);
  });
});
