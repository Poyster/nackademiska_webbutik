var productsInCart = [];

angular.module("cart").controller("cartController", ["$scope","$rootScope","$location","productService","loginService", function ($scope,$rootScope,$location, productService, loginService) {




    productService.getProducts().then(function (response) {
        $scope.products = response.data;
    });

    /*productService.getProductById().then(function (response) {
        productsInCart = response.data;
    });
*/
    $rootScope.productsCart = productsInCart;
    $scope.productToCartClicked = function (product) {
        productsInCart.push(product);

    };


    $scope.clickToCart = function () {

        if(!loginService.isLoggedIn()){
            $location.path("/login")
        } else {
            $location.path("/cart");
        }

    };

    $scope.removeItem = function (product) {
        $scope.productsCart.splice(product, 1);
    }



}]);
