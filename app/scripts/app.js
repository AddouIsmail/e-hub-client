'use strict';

/**
 * @ngdoc overview
 * @name eHubClientApp
 * @description
 * # eHubClientApp
 *
 * Main module of the application.
 */
 angular.module('eHubClientApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngCookies' 
    ])
 .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })               
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html'
    })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
    })
        .when('/products/:id?', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
    })      
        .when('/product/:id?', {
        templateUrl: 'views/product-details.html',
        controller: 'ProductDetailsCtrl',
        controllerAs: 'product'
    })   
    .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'ProductDetailsCtrl',
        controllerAs: 'product-details'
    })      
    .otherwise({
        redirectTo: '/'
    });
})
 .controller('loginCtrl',function($rootScope,$http,ClientService){
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
