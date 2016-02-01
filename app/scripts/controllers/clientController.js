'use strict';

angular.module('eHubClientApp').controller('ClientCtrl',function($scope, Client) {
	$scope.getOneClient = function(idclient){
	 		$scope.client=Client.get({ id: idclient }); // get() returns a single entry
	 	}

	 var allClients = Client.query(function() {
	 		$scope.clients=allClients;
	 }); //query() returns all the entries

});