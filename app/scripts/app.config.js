(function() {
  'use strict';
  angular
    .module('shopping-cart')
    .config(function(toastrConfig) {
      angular.extend(toastrConfig, {
        maxOpened: 1,
        newestOnTop: true,
        closeButton: true,
        positionClass: 'toast-top-center',
        timeOut: 2000,
        autoDismiss: true
      });
    })
    .config(function($uibModalProvider) {
      $uibModalProvider.options.animation = false;
    })
    .config(function($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    });
}());
