//initialize your app – give the same name as ng-app value
var firstapp = angular.module("myApp",['ngRoute','ngSanitize']);
//routing info

firstapp.config(['$routeProvider', function($routeProvider) {
                                $routeProvider.when("/", {templateUrl: "partials/home.html"});

                                $routeProvider.when("/about", {templateUrl: "partials/about.html", controller: "eventsController"});
