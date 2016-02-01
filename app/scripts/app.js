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
    'ngSanitize'
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
        controller: 'ProductCtrl',
        controllerAs: 'product'
    })      
    .otherwise({
        redirectTo: '/'
    });
});
