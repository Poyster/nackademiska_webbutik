angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;

    return {
        login: function (email, password) {
            //$http.get till någon service som checkar om användaren är ok.

            if(email == "john@doe.com" && password == "john1234"){
                isLoggedIn = true;
            }
            else {
                isLoggedIn = false;
            }
        },
        isLoggedIn: function () {
            return isLoggedIn;
        }
    };
}]);
