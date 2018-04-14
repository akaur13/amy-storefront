(function() {
    'use strict';
    angular.module('shopping-cart')
      .factory('getData', GetData);
  
    function GetData($http) {
      return {
        fetchAll: fetchAll,
      };

      function fetchAll (){
        return $http({
            method: 'GET',
            url: './storefront/json/products.json',
          });
      }
    }
  }());
  