'use strict';

/**
 * @ngdoc function
 * @name ndtndtApp.controller:TopsellercatCtrl
 * @description
 * # TopsellercatCtrl
 * Controller of the ndtndtApp
 */
angular.module('ndtndtApp')
    .controller('TopsellercatCtrl', function ($scope, ProductServices) {
        $scope.topsellerpromise = ProductServices.getTopCategories()
            .then(function (data) {
                if (data) {
                    if (data.length == 1 && data[0][0]) {
                        $scope.topsellercategory = data[0];
                    } else {
                        $scope.topsellercategory = data;
                    }
                }
            });
    });