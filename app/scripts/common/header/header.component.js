(function() {
    'use strict';
    angular.module('shopping-cart')
      .component('header', {
        templateUrl: 'views/header.component.html',
        controller: HeaderComponentController,
        bindings: {
          selectedItems: '<'
        }
      });
    function HeaderComponentController() {
      var vm = this;
      vm.$onInit = () =>{
          console.log('Header.$onInit', vm.selectedItems);
      };

      angular.extend(vm, {
        toggle: false
      });
    
    }
  }());
  