'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
	.controller('IndexCtrl',function($scope, Category) {		
		var allCategories = Category.query(function() {
			$scope.categories=allCategories;
		}); //query() returns all the entries
});