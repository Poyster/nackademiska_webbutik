
angular.module("product").factory("productService",["$http",function ($http) {

    return {
        getProducts: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/product");

        },

        getProductById: function (id) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);

        },

        getProductBySearchTerm: function(searchTerm) {
            return $http.get("http://nackbutik.azurewebsites.net/api/product/" + searchTerm);
        }

        /*getProductsByCategory: function (id) {
         return $http.get("http://nackbutik.azurewebsites.net/api/product?categoryId=" + id);

         }
         */
    };

}]);