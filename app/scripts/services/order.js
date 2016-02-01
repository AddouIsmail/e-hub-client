'use strict';

angular.module('eHubClientApp')
.factory('Order', function ($resource) {
        return $resource('http://127.0.0.1:8080/order/:id');
});
