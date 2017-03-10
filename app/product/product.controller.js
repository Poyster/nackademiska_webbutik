angular.module("product").controller("productController", ["$scope","$location","productService", function ($scope,$location, productService) {

    productService.getProducts().then(function (response) {
        $scope.products = response.data;
    });

    $scope.productClicked = function(id) {
        $location.path("/product/" +  id);

    };




}]);

