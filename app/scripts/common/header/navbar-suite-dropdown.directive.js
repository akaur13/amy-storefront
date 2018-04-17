(function() {
  'use strict';
  angular.module('shopping-cart')
    .directive('ssNavbarSuiteDropdown', function($location, $interpolate) {
      return {
        restrict: 'E',
        templateUrl: 'views/navbar-suite-dropdown.directive.html',
        transclude: true,
        link: function(scope, element) {
          var url, selectedSuite, dropDownToggle;
          scope.navCollapsed = true;
          url = $location.url().split('/')[2];
          selectedSuite = element.find('ul.dropdown-menu li a[href*=' + url + ']');
          dropDownToggle = element.find('a[class=dropdown-toggle]>span:first');
          if (selectedSuite.length === 1) {
            dropDownToggle.text($interpolate(selectedSuite.text())());
          } else {
            dropDownToggle.text('Select Suite');
          }
        }
      };
    });
}());
