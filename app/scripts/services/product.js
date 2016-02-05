'use strict';
var Basket = [];
angular.module('eHubClientApp')
.factory('Product', function ($resource) {
        return $resource('http://127.0.0.1:8080/product/:id');
});

angular.module('eHubClientApp').service('basketProvider', function ($cookies) {
    this.getBasketItems = function () {
    	Basket=$cookies.getObject('basket');
        return Basket;
    }

    this.add = function (item) {
        //Basket.push(item);
        $cookies.putObject('basket'+item);
        Basket=$cookies.getObject('basket');
        return Basket;
    }
    
 });
