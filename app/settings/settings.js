'use strict';

angular.module('myApp.settings', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/settings', {
        templateUrl: 'settings/settings.html',
        controller: 'SettingsCtrl'
    });
}])

// Home controller
.controller('SettingsCtrl', [function() {
}]);
