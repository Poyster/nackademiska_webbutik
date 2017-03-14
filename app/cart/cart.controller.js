var productsInCart = [];
var productsInOrder = [];

angular.module("cart").controller("cartController", ["$scope", "$rootScope", "$location", "productService", "loginService", "cartService", function ($scope, $rootScope, $location, productService, loginService, cartService) {


    productService.getProducts().then(function (response) {
        $scope.products = response.data;
    });

    /*productService.getProductById().then(function (response) {
     productsInCart = response.data;
     });
     */
    $rootScope.productsOrder = productsInOrder;
    $rootScope.productsCart = productsInCart;

    $scope.productToCartClicked = function (product) {

        var order = false;

        if(productsInCart.length == 0) {
            product.quantity = 1;
            productsInCart.push(product);
        } else{
            for (var i = 0; i < productsInCart.length; i++) {
                if (product.name == productsInCart[i].name) {
                    order = true;
                    productsInCart[i].quantity += 1;
                    i = productsInCart.length;

                }
                }

            if (!order){
                product.quantity = 1;
                productsInCart.push(product);
            }
            }

        console.log(product.quantity);

    };


    $scope.clickToCart = function () {

        if (!loginService.isLoggedIn()) {
            $location.path("/login")
        } else {
            $location.path("/cart");
        }

    };

    $scope.removeItem = function (product) {
        $scope.productsCart.splice(product, 1);
    };


    $scope.sendOrder = function () {

        var newOrder = {

            //bryt ner productsCart till en ny array som innehåller quantity och productId. Skicka med denna.
            products: cartService.productIdAndQuantity(),
            customerId: loginService.customerIdAfterLogin()

        };

        console.log(cartService.productIdAndQuantity());
        cartService.sendOrder(newOrder)

    };


}]);
