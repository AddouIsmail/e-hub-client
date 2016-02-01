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



angular.module('eHubClientApp').controller('ProductCtrl',function($scope, Entry) {
	var entry = function(){
		Entry.get({ id: $scope.id }, function() {
		console.log(entry);
  })}; // get() returns a single entry

	var entries = Entry.query(function() {
		console.log(entries);
  }); //query() returns all the entries

  $scope.entry = new Entry(); //You can instantiate resource class

  $scope.entry.data = 'some data';

  Entry.save($scope.entry, function() {
    //data saved. do something here.
  }); //saves an entry. Assuming $scope.entry is the Entry object  
});