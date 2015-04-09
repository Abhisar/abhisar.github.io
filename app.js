// app.js

// define our application and pull in ngRoute and ngAnimate
var app = angular.module('app', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })

        // about page
        .when('/cv', {
            templateUrl: 'assets/cv.html',
            controller: 'aboutController'
        })

        // contact page
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        });

});


// CONTROLLERS ============================================
// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});