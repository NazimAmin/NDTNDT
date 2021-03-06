'use strict';

/**
 * @ngdoc overview
 * @name ndtndtApp
 * @description
 * # ndtndtApp
 *
 * routes of the application
 */
angular
    .module('app.routes', [])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRoutes])
    .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])
    .run(function ($rootScope) {
        $rootScope.restServer = 'https://api-ndtndt.azurewebsites.net';
    });

function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider, $rootScope) {
    $stateProvider
        .state('mainpage', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as main'
        })
        .state('auth', {
            url: '/auth',
            templateUrl: 'views/auth.html',
            controller: 'AuthCtrl as auth'
        })
        .state('product', {
            url: '/auction?auctionId',
            templateUrl: 'views/product.html',
            controller: 'ProductCtrl as product'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controller: 'ProductsCtrl as products'
        })
        .state('profile', {
            url: '/profile/{customerid}',
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl as profile'
        })
        //when a customer bids, open as a dialog
        .state('bid', {
            url: '/bid',
            templateUrl: 'views/bid.html',
            controller: 'BidCtrl as bid'
        })
        .state('auction', {
            url: '/auction',
            templateUrl: 'views/auction.html',
            controller: 'AuctionCtrl as auction'
        })
        .state('bigadmin', {
            url: '/manager-admin',
            templateUrl: 'views/bigadmin.html',
            controller: 'BigAdminCtrl as admin'
        })
        .state('littleadmin', {
            url: '/customer-rep',
            templateUrl: 'views/littleadmin.html',
            controller: 'LittleAdminCtrl as little'
        });

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

}