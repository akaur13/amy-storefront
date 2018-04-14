(function() {
    'use strict';
    angular.module('shopping-cart')
      .component('stepper', {
        templateUrl: 'views/stepper.component.html',
        controller: StepperComponentController,
        bindings: {
            quantity: '=',
            calculateTotal: '&'
        },
      });
    function StepperComponentController() {
      var vm = this;
      vm.$onInit = () =>{
          console.log('stepper.$onInit',vm.quantity);
      };

      angular.extend(vm, {
        stepUp: stepUp,
        stepDown: stepDown
      });

      function stepUp() {
        vm.quantity =  vm.quantity > 10 ? 9 : vm.quantity;
        var qty = ++vm.quantity;
        vm.calculateTotal();
        return qty;
      } 
      
      function stepDown() {
        vm.quantity =  vm.quantity < 2 ? 2 : vm.quantity;
        var qty = --vm.quantity;
        vm.calculateTotal();
        return qty;
      }
    
    }
  }());
  