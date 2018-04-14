(function() {
  'use strict';
  angular
    .module('shopping-cart')
    .run(function($rootScope, $uibModalStack) {
      $rootScope.$on('$stateChangeStart', function() {
        $uibModalStack.dismissAll();
      });
    });
}());
