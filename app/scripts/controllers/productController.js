'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')
	.controller('ProductCtrl',function($http, $routeParams, $scope, Product,Category) {		
		$scope.currentCategory = Category.get({id: $routeParams.id});
		//$scope.chosenSuperCategory = $scope.currentCategory.superSuperCategory;
		console.log($scope.currentCategory);
		$scope.chosenCategories = [ $routeParams.id ];
		$scope.chosenBrands = [];
		$scope.addToChosenCat = function(idCategory){
			$scope.chosenCategoriesBis = [];			
			var i = $scope.chosenCategories.indexOf(idCategory);
			if(i > -1){
				$scope.chosenCategories.splice(i, 1);
			}
			else{
				$scope.chosenCategories.push(idCategory);
			}			
			//console.log($scope.chosenCategories);
		}
		$scope.addToChosenBrand = function(brand){			
			var i = $scope.chosenBrands.indexOf(brand);
			if(i > -1) {
				$scope.chosenBrands.splice(i, 1);
			}
			else{
				$scope.chosenBrands.push(brand);
			}						
		}
		$scope.showSuperSuperCategory = function(superSuperCategory){			
			$scope.chosenSuperCategory = superSuperCategory;			
			$scope.currentCategory = null;
			$scope.chosenCategories = [];
			$scope.chosenBrands = [];
			$http.get('http://localhost:8080/category/supCat/'+superSuperCategory).success(function (response) {		        
		        response.forEach(function(entry) {
				    $scope.chosenCategoriesBis.push(entry.id);
				});
				//console.log($scope.chosenCategories);
		    }).error(function (response) {
		        //console.log('error: '+response);		        
		    });             
		}						
		/*$scope.getOneProduct = function(idproduct){
	 		$scope.product=Product.get({ id: idproduct }); // get() returns a single entry
	 	}*/

	 	$scope.greaterThan = function(prop, val){
		    return function(item){
		      return item[prop] >= val;
		    }
		}
		$scope.setChosenDiscount = function(discount){
			$scope.chosenDiscount = discount;
		    console.log($scope.chosenDiscount);
		}

		var allProducts = Product.query(function() {
			$scope.products=allProducts;
		}); //query() returns all the entries

		var allCategories = Category.query(function() {
			$scope.categories=allCategories;
		}); //query() returns all the entries
});
