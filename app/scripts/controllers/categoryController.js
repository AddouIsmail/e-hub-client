'use strict';

angular.module('eHubClientApp').controller('CategoryCtrl',function($rootScope, Category) {
	$rootScope.getOneCategory = function(idCategory){
	 		$rootScope.category=Category.get({ id: idCategory }); // get() returns a single entry
	 	}

	 var allCategories = Category.query(function() {
	 		$rootScope.categories=allCategories;
 	 }); //query() returns all the entries
});