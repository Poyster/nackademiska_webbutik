angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "app/product/product.template.html",
            controller: "productController"
        })
        .when("/product/:productId", {
            templateUrl: "app/product/product-details.template.html",
            controller: "productDetailsController"
        })
        .when("/login", {
            templateUrl: "app/login/login.template.html",
            controller: "loginController"
        })
        .when("/category/:categoryId", {
            templateUrl: "app/category/category.template.html",
            controller: "categoryController"
        })
        .when("/cart", {
            templateUrl: "app/cart/cart.template.html",
            controller: "cartController"
        })

        .otherwise("/");
    $locationProvider.html5Mode(true);
}]);
