'use strict';

angular.module('eHubClientApp')
.factory('Product', function ($resource) {
        return $resource('http://127.0.0.1:8080/product/:id');
})

/*.service('productProvider', function ($http) {
  	  this.getProducts = function ($http) {
    	$http.get('http://127.0.0.1:8080/product').success(function(response){
			console.log('retrieving data from :http://127.0.0.1:8080/product');
    		return response;
    	}).error(function(response){
			console.log('error while getting products');
        });
    }
});*/




/*angular.module('eHubClientApp')
    .factory('productProvider', function ($resource, DateUtils) {
        return $resource('http://127.0.0.1:8080/product', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

*/