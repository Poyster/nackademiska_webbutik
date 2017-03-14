angular.module("cart").factory("cartService",["$http",function ($http) {


    return {

        sendOrder: function(order) {
            return $http.post("http://nackbutik.azurewebsites.net/api/order/", order).then(function (response) {
                console.log(response.data)
            })

        },
        productIdAndQuantity: function () {


            //productsInOrder.push(i);
       /* angular.forEach(productsInCart, function (id, quantity) {
            productsInOrder.push(id);
            productsInOrder.push(quantity)
        });*/



        return productsInOrder;
    }

    }

}]);
