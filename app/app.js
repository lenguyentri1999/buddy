'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',           // home module
    'myApp.register',       //register module
    'myApp.profile',
    'myApp.version'

]).
config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');

    // Set default view of our app to home
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
