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
        $http.get('http://localhost:8080/clients').success(function(response){
            console.log('http://localhost:8080/clients');
            console.log(response);
        }).error(function(response){
            console.log(response);
        });
    };
});
