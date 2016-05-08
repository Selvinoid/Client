angular.module("AngularAuthApp").controller("layoutController", ["$scope", '$http', "$localStorage", function ($scope, $http, $localStorage) {

   

    $scope.orders = [];

    $scope.getOrders = function () {
        return $http.get(serviceBase + 'api/orders/GetOrders').then(function (results) {
            $scope.orders= results.data;
        });
    };

    $scope.removeOrder = function (order) {
        return $http({
            url: serviceBase + 'api/orders/DeleteOrder',
            method: "GET",
            params: {   
                id: order.id
            }
        }).then(function (results) {
            $scope.orders.splice($scope.orders.indexOf(order), 1);
        });
    };
    
    $scope.init = function() {
        $scope.getOrders();
        $scope.$storage = $localStorage.$default({
            card: []
        });
    }

}]);