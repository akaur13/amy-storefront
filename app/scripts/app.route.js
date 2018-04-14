(function() {
  'use strict';
  angular
    .module('shopping-cart')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
        .when('/', '/cart')
        .when('', '/cart')
        .otherwise('/404');
      $stateProvider
        .state('cart', {
          url: '/cart',
          template: `<cart></cart>`,
        })
        .state('main.404', {
          url: '/404',
          templateUrl: 'views/404.html',
        })
        .state('main.403', {
          url: '/403',
          templateUrl: 'views/403.html',
        });
    });
}());
