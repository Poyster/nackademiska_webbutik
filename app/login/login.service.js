

angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;
    var customerIdAfterLogin;
    var customerNameAfterLogin;


    return {

        createLogin: function(customer) {
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/", customer);

        },

        login: function (user) {

            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login/", user).then(function (response) {

                            isLoggedIn = true;
                            customerIdAfterLogin = response.data.customerId;
                            customerNameAfterLogin = response.data.firstName + " " + response.data.lastName;
                },function errorCallback(response) {

                }
            )

            },
        logout: function () {
            isLoggedIn = false;
            customerIdAfterLogin = null;
        },
        isLoggedIn: function () {
            return isLoggedIn;

        },
        customerIdAfterLogin: function () {
            return customerIdAfterLogin;
        },
        customerNameAfterLogin: function () {
            return customerNameAfterLogin;
        }
    };
}]);
