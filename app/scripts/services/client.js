'use strict';

angular.module('eHubClientApp')
.factory('Client', function ($resource) {
        return $resource('http://127.0.0.1:8080/client/:id');
});