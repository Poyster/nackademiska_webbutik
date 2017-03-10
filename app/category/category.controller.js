angular.module("category").controller("categoryController", ["$scope","$routeParams","$location","categoryService", function ($scope,$routeParams,$location,categoryService) {

        categoryService.getCategories().then(function (response) {
            $scope.categories = response.data;
        });

    $scope.categoryId = $routeParams.categoryId;

    $scope.categoryClicked = function(id) {

        $location.path("/category/" + id);

    };





}]);
