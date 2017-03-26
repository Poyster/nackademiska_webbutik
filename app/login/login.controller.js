angular.module("login").controller("loginController", ["$scope", "$location", "loginService",
    function ($scope, $location, loginService) {
        $scope.text = "";
        $scope.user = {};

        $scope.customerName = function () {
            return loginService.customerNameAfterLogin();
        };


        $scope.login = function () {

            var userinfo = {
                email: $scope.user.email,
                password: $scope.user.password
            };

            loginService.login(userinfo).then(function () {

                if (!loginService.isLoggedIn()) {
                    $scope.text = "Fel användarnamn eller lösenord. vänligen försök igen."
                } else {
                    $location.path("/cart");

                }
            });
        };

        $scope.logout = function () {
            $location.path("/");
            return loginService.logout()
        };
        $scope.isLoggedIn = function () {
            return loginService.isLoggedIn()
        };


    }]);
