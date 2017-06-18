'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',           //signin module
    'myApp.register',       //register module
    'myApp.profile',        //profile module
    'myApp.interest',       //interest module
    'myApp.settings',       //settings module
    'myApp.version'

]).
config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');

    // Set default view of our app to home
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
