'use strict';

angular.module('eHubClientApp').controller('CategoryCtrl',function($scope, Category) {
	$scope.getOneCategory = function(idCategory){
	 		$scope.category=Category.get({ id: idCategory }); // get() returns a single entry
	 	}

	 var allCategories = Category.query(function() {
	 		$scope.categories=allCategories;
 	 }); //query() returns all the entries
});