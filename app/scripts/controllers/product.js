/*'use strict';



angular.module('eHubClientApp').controller('ProductCtrl',function($scope, Product,Category,basketProvider) {
	$scope.getOneProduct = function(idproduct){
	 		$scope.product=Product.get({ id: idproduct }); // get() returns a single entry
	 	}

	 var allProducts = Product.query(function() {
	 		$scope.products=allProducts;
 	 }); //query() returns all the entries

 	 var allCategories = Category.query(function() {
	 		$scope.categories=allCategories;
 	 }); //query() returns all the entries

 	 var basket=basketProvider.getBasketItems(function(){
 	 	$scope.basket=basket;
 	 });

 	 $scope.addToBasket=function(id,quantity){
 	 	var productItem={"id":id,"quantity":quantity};
 	 	$scope.basket=basketProvider.add(productItem);
 	 }
});

//TEMPLATE FOR SAVING
/*
  Entry.save($scope.entry, function() {
    //data saved. do something here.
  }); //saves an entry. Assuming $scope.entry is the Entry object  */