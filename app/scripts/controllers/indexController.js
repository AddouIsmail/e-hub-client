'use strict';

/**
 * @ngdoc function
 * @name eHubClientApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the eHubClientApp
 */
angular.module('eHubClientApp')

	.controller('IndexCtrl',function($scope, Category, Product,$rootScope,$http,ClientService) {		
		$rootScope.date=new Date();
		var allCategories = Category.query(function() {
			$scope.categories=allCategories;
		 }); //query() returns all the entries

		var allProducts = Product.query(function() {
			$scope.products=allProducts;
		}); //query() returns all the entries

		$rootScope.LoginAction=function(login,pass){
		    $http.get('http://localhost:8080/client/authentification/'+login).success(function (argument) {
		        if(argument.login==login && argument.password==pass){
		            console.log('authenticated');
		            $rootScope.currentUser=argument;
		            console.log(ClientService.add(argument));
		        }else{
		            console.log(argument);
		            alert("email ou mot de passe incorrect ! ");
		        }
		    }).error(function (argument) {
		        console.log('error: '+argument);
		        return null;
		    });             
		};

		$rootScope.currentUser=ClientService.getall();
		$rootScope.DisconnectAction=function(){
		    if($rootScope.currentUser==null)
		        console.log("null");
		    else
		        console.log('before: '+$rootScope.currentUser);
		    ClientService.removeUserCookie();
		    if($rootScope.currentUser==null)
		        console.log("null");
		    else
		        console.log('after: '+$rootScope.currentUser);          
		    $rootScope.currentUser=null;
		}
});
