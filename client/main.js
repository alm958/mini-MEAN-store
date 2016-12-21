var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/_dashboard.html',
        controller: 'dashboardController'
    })
    .when('/teams',{
        templateUrl: 'partials/_products.html',
        controller: 'productsController'
    })
    .when('/customers',{
        templateUrl: 'partials/_customers.html',
        controller: 'customersController'
    })
    .when('/orders',{
        templateUrl: 'partials/_orders.html',
        controller: 'ordersController'
    })
    .when('/products',{
        templateUrl: 'partials/_products.html',
        controller: 'productsController'
    })
    .when('/updateProduct/:id',{
        templateUrl: 'partials/_update_product.html',
        controller: 'productsController'
    })
    .otherwise({
         redirectTo: "/"
     });
}]);
