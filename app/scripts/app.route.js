(function() {
  'use strict';
  angular
    .module('shopping-cart')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
        .when('/', '/cart')
        .when('', '/cart')
        .otherwise('/');
      $stateProvider
        .state('cart', {
          url: '/cart',
          template: `<cart></cart>`,
        });
    });
}());
