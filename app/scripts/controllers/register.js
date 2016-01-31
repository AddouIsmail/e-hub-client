'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
  .controller('RegisterCtrl', function ($scope,$http) {
    $scope.client={};
    $scope.addClient = function(client){
        console.log(client);
    }
  });
