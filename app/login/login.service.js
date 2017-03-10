angular.module("login").factory("loginService",["$http", function ($http) {
    var isLoggedIn = false;



    return {

        getLogin: function () {
            return $http.get("http://nackbutik.azurewebsites.net/api/customer/login")
        },

        createLogin: function(contact) {
            return $http.post("http://api-adressboken.azurewebsites.net/contact", contact);

        },

        login: function (user) {
            //$http.get till någon service som checkar om användaren är ok.
            return $http.post("http://nackbutik.azurewebsites.net/api/customer/login")


            if(email == email && password == password){
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
