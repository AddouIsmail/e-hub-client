'use strict';

angular.module('eHubClientApp')
.factory('Client', function ($resource) {
        return $resource('http://127.0.0.1:8080/client/:id');
});

angular.module('eHubClientApp').service('ClientService', function ($cookies) {
    
    this.add=function(user){
    	$cookies.putObject('user',user);
    	return $cookies.getObject('user');
    };

    this.getall=function(){
    	return $cookies.getObject('user');
    }

    this.removeUserCookie=function(user){
    	$cookies.remove('user');
    	return null;
    }
    
 });