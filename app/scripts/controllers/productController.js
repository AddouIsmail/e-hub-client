'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
	.controller('ProductCtrl',function($routeParams, $scope, Product,Category) {
		$scope.idCategory = $routeParams.id;
		$scope.getOneProduct = function(idproduct){
		 		$scope.product=Product.get({ id: idproduct }); // get() returns a single entry
		 	}

		 var allProducts = Product.query(function() {
		 		$scope.products=allProducts;
	 	 }); //query() returns all the entries

	 	 var allCategories = Category.query(function() {
		 		$scope.categories=allCategories;
	 	 }); //query() returns all the entries
});
