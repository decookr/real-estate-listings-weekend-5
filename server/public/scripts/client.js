var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/sale.html',
        controller: 'SaleController as vm'
    }).when('/rent', {
        templateUrl: '/views/rent.html',
        controller: 'RentController as vm'
    }).when('/add-listing', {
        templateUrl: '/views/add-listing.html',
        controller: 'AddController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
