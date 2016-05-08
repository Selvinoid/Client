angular.module("AngularAuthApp").controller("hotelController", ["$scope", "hotelService", function ($scope, hotelService) { 
    $scope.hotels = [];     
    $scope.currentHotel = {};   
    $scope.search = {};

    $scope.getHotels=function() {
        hotelService.getHotels().then(function (results) {
            $scope.hotels = results.data;

        }, function (error) {
            //alert(error.data.message);
        });
    }
    $scope.hotelDetails = function (hotel) {    
        $scope.currentHotel = angular.copy(hotel);
        $("#details").modal("show");
    };

    $scope.findHotel = function (from, to) {
        hotelService.find(from, to) 
           .success(function (data) {
               $scope.hotels = data;    
           }).error(function () {
           });
        
    };

    $scope.hotelOrder=function(hotel) {
        $scope.currentHotel = angular.copy(hotel);
        $("#hotelOrder").modal("show");
    }
    $scope.setStars = function (count) {
        $scope.search.Stars = count;
    };
    $scope.range = function (count) {
        var ratings = [];
        for (var i = 0; i < count; i++) {
            ratings.push(i);
        }
        return ratings;
    }
    $scope.saveOrder = function (from, to, countdays) {
        var order = {};
        order.Id = 0;
        order.UserName = "";
        order.CountOfDays = 0;
        order.TotalPrice = 0;
        
        order.ArrivalDate = from;
        order.LeaveDate = to;
        order.HotelName = $scope.currentHotel.Name;
        order.RoomNumber = $scope.currentHotel.Rooms[0].Number;
        hotelService.saveOrder(order)
            .success(function (data) {
                $("#hotelOrder").modal("hide");
            }).error(function () {
                $("#hotelOrder").modal("hide");
            });
    };
    //hotelService.getHotels().then(function (results) {
    //    $scope.hotels = results.data;

    //}, function (error) {
    //    //alert(error.data.message);
    //});
}]);