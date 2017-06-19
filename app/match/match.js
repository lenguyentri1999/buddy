'use strict';

angular.module('myApp.match', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/match', {
        templateUrl: 'match/match.html',
        controller: 'MatchCtrl'
    });
}])

// Home controller
.controller('MatchCtrl', [function() {
}]);
