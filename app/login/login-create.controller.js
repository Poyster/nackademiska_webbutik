angular.module("login").controller("loginCreateController", ["$scope", "$routeParams", "$location", "loginService",
    function ($scope, $routeParams, $location, loginService) {

        $scope.customer = {};

        $scope.createLogin = function () {
            var newLogin = {
                firstname: $scope.customer.firstname,
                lastname: $scope.customer.lastname,
                email: $scope.customer.email,
                phone: $scope.customer.phone,
                password: $scope.customer.password,
                address: $scope.customer.address,
                postalCode: $scope.customer.postalCode,
                city: $scope.customer.city

            };

            loginService.createLogin(newLogin).then(function () {
                $location.path("/login");
            });

        };


    }]);