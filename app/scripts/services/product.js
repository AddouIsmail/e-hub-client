'use strict';
var Basket = [];
angular.module('eHubClientApp')
.factory('Product', function ($resource) {
        return $resource('http://127.0.0.1:8080/product/:id');
});

angular.module('eHubClientApp').service('basketProvider', function () {
    this.getBasketItems = function () {
        return Basket;
    }

    this.add = function (item) {
        Basket.push(item);
        return Basket;
    }
});