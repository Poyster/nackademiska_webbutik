var productsInCart = [];


angular.module("cart").controller("cartController", ["$scope", "$rootScope", "$location", "productService", "loginService", "cartService", function ($scope, $rootScope, $location, productService, loginService, cartService) {

    $scope.orderDoneText = "";

    productService.getProducts().then(function (response) {
        $scope.products = response.data;
    });

    $scope.emptyProductCart = function () {
        $rootScope.productsCart = [];
    };

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

        var customerId = loginService.customerIdAfterLogin();
        var productsInOrder = $scope.productsCart;
        var productObj = {};

        var productIdAndQuantityToOrder = [];

        angular.forEach(productsInOrder, function (productOrd) {
            productObj.productId = productOrd.id;
            productObj.quantity = productOrd.quantity;
            productIdAndQuantityToOrder.push(productObj);
            productObj = {};
        });

        var newOrder = {

            customerId: customerId,
            products: productIdAndQuantityToOrder
    };


        cartService.sendOrder(newOrder).then(function successCallBack() {
            $scope.showmeSuccess = true;
            $scope.orderDoneText = "Tack för ditt köp! Inom kort får du hem en faktura i brevlådan."
            $scope.emptyProductCart();

        },function errorCallBack() {
            $scope.showmeWrong = true;
            $scope.orderDoneText = "Din order skickades inte, var vänlig försök igen."

        });

    };



}]);
