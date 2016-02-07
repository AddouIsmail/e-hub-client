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
		$scope.currentCategory = Category.get({id: $routeParams.id});
		$scope.chosenCategories = [ $routeParams.id ];
		$scope.chosenBrands = [];
		$scope.addToChosenCat = function(idCategory){
			var i = $scope.chosenCategories.indexOf(idCategory);
			if(i > -1){
				$scope.chosenCategories.splice(i, 1);
			}
			else{
				$scope.chosenCategories.push(idCategory);
			}
			console.log($scope.chosenCategories);
		}
		$scope.addToChosenBrand = function(brand){
			var i = $scope.chosenBrands.indexOf(brand);
			if(i > -1) {
				$scope.chosenBrands.splice(i, 1);
			}
			else{
				$scope.chosenBrands.push(brand);
			}
			console.log($scope.chosenBrands);
		}
		$scope.showSuperSuperCategory = function(superSuperCategory){			
			$scope.chosenSuperCategory = superSuperCategory;			
			$scope.currentCategory = null;
			$scope.chosenCategories = [];
			$scope.chosenBrands = [];
			console.log($scope.chosenSuperCategory);
		}
		$scope.setChosenDiscount = function(discount){
			$scope.chosenDiscount = discount;
		}		
		/*$scope.getOneProduct = function(idproduct){
	 		$scope.product=Product.get({ id: idproduct }); // get() returns a single entry
	 	}*/

		var allProducts = Product.query(function() {
			$scope.products=allProducts;
		}); //query() returns all the entries

		var allCategories = Category.query(function() {
			$scope.categories=allCategories;
		}); //query() returns all the entries
		
	 	$rootScope.basket=basketProvider.getBasketItems();
	 	$rootScope.totalPrice=basketProvider.computeSum();
	 	$rootScope.basketsize=basketProvider.BasketSize();

	 	$rootScope.addToBasket=function(id,quantity,price){
	 		var productItem={"id":id,"quantity":quantity,"price":price};
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
});
