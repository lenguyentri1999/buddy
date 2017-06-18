'use strict';

angular.module('myApp.interest', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/interest', {
        templateUrl: 'interest/interest.html',
        controller: 'InterestCtrl'
    });
}])

// Home controller
.controller('InterestCtrl', [function() {
}]);
