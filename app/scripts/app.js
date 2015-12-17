'use strict';

angular.module('yeomanTodosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
  'LocalStorageModule'
])
.config(['localStorageServiceProvider', function (localStorageServiceProvider) {       
        localStorageServiceProvider.setPrefix('ls');   
}])
.config(function ($routeProvider) {
        $routeProvider
                .when('/', {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                })
                .otherwise({
                        redirectTo: '/'
                });
});