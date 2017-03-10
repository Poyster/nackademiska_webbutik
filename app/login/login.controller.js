angular.module("login").controller("loginController", ["$scope","$location", "loginService",
    function ($scope,$location, loginService) {
        $scope.text = "";

        $scope.login = function(){
            loginService.login($scope.email, $scope.password)

            if(!loginService.isLoggedIn()){
                $scope.text = "Fel användarnamn eller lösenord. vänligen försök igen."
            }else{
                $location.path("/cart");
            }
        };
    }]);
