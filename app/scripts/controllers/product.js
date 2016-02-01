'use strict';

/*angular.module('eHubClientApp')
.controller('ProductCtrl',  function ($scope,$http) {
	$http.get('http://127.0.0.1:8080/product').success(function(response){
		console.log('retrieving data from :http://127.0.0.1:8080/product');
		$scope.products=response;
	}).error(function(response){
		console.log('error while getting products');
	});
});*/

/*angular.module('eHubClientApp')
.controller('ProductCtrl',  function ($scope,productProvider) {
		$scope.products=productProvider.getProducts();
	});*/


/*angular.module('eHubClientApp')
    .controller('ProductCtrl', function ($scope, productProvider) {

        $scope.products = [];
        $scope.loadAll = function() {
            productProvider.query(function(result) {
               $scope.products = result;
            });
        };
        $scope.loadAll();

    });*/



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