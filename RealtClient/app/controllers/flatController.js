angular.module("AngularAuthApp").controller("flatController", ["$scope", "flatService", function ($scope, houseService) {
    $scope.flats = [];  
    $scope.currentFlat = {};
    $scope.search = {};
    $scope.search.RoomCount = "";

    $scope.flatDetails = function (flat) { 
        $scope.currentFlat = angular.copy(flat);    
        $("#details").modal("show");
    };
    $scope.range = function (count) {
        var ratings = [];
        for (var i = 0; i < count; i++) {
            ratings.push(i);
        }
        return ratings;
    }
    $scope.setRoomCount = function (count) {
        $scope.search.RoomCount = count;
    };

    houseService.getFlats().then(function (results) {   
        $scope.flats = results.data;    
    }, function (error) {
        //alert(error.data.message);
    });
}]);