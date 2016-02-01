'use strict';

angular.module('eHubClientApp').controller('ProductCtrl',function($scope, Product) {
	$scope.getOneProduct = function(idproduct){
	 		$scope.product=Product.get({ id: idproduct }); // get() returns a single entry
	 	}

	 var allProducts = Product.query(function() {
	 		$scope.products=allProducts;
 	 }); //query() returns all the entries

 // $scope.productService = new Product(); //You can instantiate resource class


/*
  Entry.save($scope.entry, function() {
    //data saved. do something here.
  }); //saves an entry. Assuming $scope.entry is the Entry object  */
});