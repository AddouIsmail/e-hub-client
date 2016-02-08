'use strict';



angular.module('eHubClientApp').controller('ProductDetailsCtrl',function($scope,$rootScope, $routeParams ,Product,Category,basketProvider) {

	 var oneProduct=Product.get({id: $routeParams.id},function(){
	 		console.log($scope.product);
	 		$scope.product=oneProduct;
	 });

	 var allProducts=Product.query(function(){
	 		$scope.products=allProducts;
	 });

 	var allCategories = Category.query(function() {
 		$scope.categories=allCategories;
 	}); 

 	$rootScope.basket=basketProvider.getBasketItems();
 	$rootScope.totalPrice=basketProvider.computeSum();
 	$rootScope.basketsize=basketProvider.BasketSize();

 	$rootScope.addToBasket=function(id,idCategory,idSupplier,name,description,discount,quantity,shippedPrice,buyPrice,value){
 	var productItem={"id":id, "idCategory": idCategory, "idSupplier":idSupplier ,"name":name,"description":description,"discount":discount , "quantity":quantity,"shippedPrice":shippedPrice,"buyPrice":buyPrice,"quantityOrdered":value};
	console.log("add to basket controller method");
	$rootScope.basket=basketProvider.add(productItem);
 	$rootScope.totalPrice=basketProvider.computeSum();
 	$rootScope.basketsize=basketProvider.BasketSize();
 	}

 	 $rootScope.clearBasket=function(){
 	 	console.log("clearbasket controller method");
 	 	$scope.basket=basketProvider.clearBasket();
	 	$rootScope.totalPrice=basketProvider.computeSum();
	 	$rootScope.basketsize=basketProvider.BasketSize();
 	 }

});

//TEMPLATE FOR SAVING
/*
  Entry.save($scope.entry, function() {
    //data saved. do something here.
  }); //saves an entry. Assuming $scope.entry is the Entry object  */