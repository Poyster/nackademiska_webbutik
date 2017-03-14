

angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;
    var customerIdAfterLogin;


    return {

        createLogin: function(customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/", customer);

        },

        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login/", user).then(function (response) {
                            console.log(response.data);
                            isLoggedIn = true;
                            customerIdAfterLogin = response.data.customerId;
                            console.log(customerIdAfterLogin);

                })

            },
        isLoggedIn: function () {
            return isLoggedIn;

        },
        customerIdAfterLogin: function () {
            return customerIdAfterLogin;

        }
    };
}]);
