(function() {
  'use strict';
  angular.module('shopping-cart')
    .directive('ssNavbar', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/navbar.directive.html',
        transclude: true,
        link: function(scope, element) {
          scope.navCollapsed = true;
          element.find('div[uib-collapse] ul.nav.navbar-nav li').on('click', function() {
            scope.navCollapsed = true;
          });
        }
      };
    });
}());
