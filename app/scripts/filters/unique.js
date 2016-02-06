'use strict';
/**
 * @ngdoc function
 * @name eHubClientApp.filter:unique
 * @description
 * # unique
 * Filter to get distinct value in ng-repeat
 */
angular.module('eHubClientApp')
    .filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});