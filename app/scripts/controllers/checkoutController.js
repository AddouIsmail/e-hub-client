	 	
'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the eHubClientApp
 */
 angular.module('eHubClientApp')
 .controller('CheckoutCtrl',function($routeParams, $scope, $rootScope,Product,Category,basketProvider,CheckoutService) {	
 	$rootScope.basket=basketProvider.getBasketItems();
 	$rootScope.totalPrice=basketProvider.computeSum();
 	$rootScope.basketsize=basketProvider.BasketSize();

 	$rootScope.addToBasket=function(id,idCategory,idSupplier,name,description,discount,quantity,shippedPrice){
 		var productItem={"id":id, "idCategory": idCategory, "idSupplier":idSupplier ,"name":name,"description":description,"discount":discount , "quantity":quantity,"shippedPrice":shippedPrice};
 		console.log("add to basket controller method");
 		$rootScope.basket=basketProvider.add(productItem);
 		$rootScope.totalPrice=basketProvider.computeSum();
 		$rootScope.basketsize=basketProvider.BasketSize();
 	}

 	$rootScope.clearBasket=function(){
 		console.log("clearbasket controller method");
 		$rootScope.basket=basketProvider.clearBasket();
 		$rootScope.totalPrice=basketProvider.computeSum();
 		$rootScope.basketsize=basketProvider.BasketSize();
 	}

 	$scope.removeFromBasket=function(product){
 		$rootScope.basket=CheckoutService.clearFromBasket(product);
 		$rootScope.totalPrice=basketProvider.computeSum();
 		$rootScope.basketsize=basketProvider.BasketSize();
 	}
	$scope.serviceCharges=basketProvider.BasketTotalServiceCharges();

 });

