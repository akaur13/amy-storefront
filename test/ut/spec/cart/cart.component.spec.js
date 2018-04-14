'use strict';
describe('cart component test', function() {
  var element, scope, compile, mockgetData, vm;

  mockgetData = {
    fetchAll: function() {
    }
  };

  beforeEach(module('shopping-cart'));

  beforeEach(function() {
    module(function($provide) {
      $provide.value('getData', mockgetData);
    });
  });

  beforeEach(
    inject(function($rootScope, $compile, $q) {
        var scopeDefer = $q.defer();
        
        scopeDefer.resolve({ data: [{
            gem: 'foo',
            price: 24,
          }, {
            gem: 'bar',
            price: 28
          }]
        });
      spyOn(mockgetData, 'fetchAll').and.returnValue(scopeDefer.promise);
      compile = $compile;
      scope = $rootScope.$new();
      element = '<cart></cart>';
      element = $compile(element)(scope);
      scope.$digest();
      scope = element.isolateScope();
      vm = scope.$ctrl;
    })
  );

  it('has two data selected content', function() {
      //only two rows inserted in data
    expect(element.find('tr[ng-repeat]').length).toBe(2);
  });

  it('can remove row by click the cross', function() {
    var vm = element.isolateScope().$ctrl;  
    expect(vm.appData.length).toBe(2);
    vm.remove(0);
    expect(vm.appData.length).toBe(1);
    scope.$digest();
    expect(element.find('tr[ng-repeat]').length).toBe(1);
  });

  it('can total the selected gems', function(){
    var vm = element.isolateScope().$ctrl; 
    expect(vm.totalAmount).toBe(52);
  })
});
