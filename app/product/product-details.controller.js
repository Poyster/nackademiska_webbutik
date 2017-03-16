angular.module("product").controller("productDetailsController", ["$scope", "$routeParams", "$location", "productService",
    function ($scope, $routeParams, $location, productService) {

        productService.getProductById($routeParams.productId).then(function (response) {
            $scope.product = response.data;
        }, function (errorResponse) {

        });

        $scope.productClickedInDetails = function () {
            $location.path("/");

        };

    }]);
