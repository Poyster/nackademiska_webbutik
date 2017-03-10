
angular.module("cart").factory("cartService",["$http",function ($http) {

    return {
        getProducts: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");

        },

        getProductCartById: function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);

        }

    }

}]);
