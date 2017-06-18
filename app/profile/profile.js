'use strict';

angular.module('myApp.profile', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile', {
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
    });
}])

// Home controller
.controller('ProfileCtrl', [function() {
}]);
