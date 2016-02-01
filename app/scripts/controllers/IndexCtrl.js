'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
    .controller('IndexCtrl', function ($rootScope,$scope,$http) {    
    $http.get('http://localhost:8080/category').success(function(response){
        console.log(response);
        $rootScope.categories = response;
    }).error(function(response){
        console.log(response);
    });    
});