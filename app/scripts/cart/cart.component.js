(function() {
  'use strict';
  angular.module('shopping-cart')
    .component('cart', {
      templateUrl: 'views/cart.component.html',
      controller: CartComponentController
    });
  function CartComponentController(getData) {
    var vm = this;
    angular.extend(vm, {
      appData: [],
      totalAmount: 0,
      remove: remove,
      calculateTotal: calculateTotal
    });

    vm.$onInit = () => {
      getData.fetchAll().then((data) => {
        data.data.forEach((gem) => {
          gem.quantity = 1;
        });
        vm.appData.push(data.data[0]);
        vm.appData.push(data.data[1]);
        calculateTotal();
      });
    };
   
    function calculateTotal(){
      var total = 0;
      vm.appData.forEach((gem) => {
        total += gem.price * gem.quantity;
      });
      vm.totalAmount = total;
    }

    function remove(index){
      vm.appData.splice(index,1);
    }
  }
}());
