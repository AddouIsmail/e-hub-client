'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
.factory('RegisterFactory',function($resource){
    return $resource('http://localhost:8080/client/:id');
});