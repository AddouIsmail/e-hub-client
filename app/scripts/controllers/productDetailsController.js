'use strict';



angular.module('eHubClientApp').controller('ProductDetailsCtrl',function($scope, $routeParams ,Product,Category,basketProvider,localStorageService) {

	 var oneProduct=Product.get({id: $routeParams.id},function(){
	 		$scope.product=oneProduct;
	 });

	 var allProducts=Product.query(function(){
	 		$scope.products=allProducts;
	 });

 	 var basket=basketProvider.getBasketItems(function(){
 	 	$scope.basket=basket;
 	 });

 	 $scope.addToBasket=function(id,quantity){
 	 	var productItem={"id":id,"quantity":quantity};
 	 	$scope.basket=basketProvider.add(productItem);
 	 };
 	 
});

//TEMPLATE FOR SAVING
/*
  Entry.save($scope.entry, function() {
    //data saved. do something here.
  }); //saves an entry. Assuming $scope.entry is the Entry object  */