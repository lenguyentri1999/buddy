'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',           //signin module
    'myApp.register',       //register module
    'myApp.profile',        //profile module
    'myApp.match',          //match module
    'myApp.interest',       //interest module
    'myApp.settings',       //settings module
    'myApp.version',
    'firebase',
    'firebaseConfig'

]).
config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');

    // Set default view of our app to home
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
