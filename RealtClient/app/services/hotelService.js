"use strict";
angular.module("AngularAuthApp").factory("hotelService", ["$http", function ($http) {

    var hotelService = {};

    hotelService.getHotels = function () {  
        return $http.get(serviceBase + 'api/hotel/GetAllHotels').then(function (results) {
            return results;
        });
    };
    hotelService.getRealtTypes = function () {
        return $http.get(serviceBase + 'api/realt/getall').then(function (results) {
            return results;
        });
    }
    hotelService.find = function (from,to) {
        return $http({
            url: serviceBase + 'api/reservation/GetFreeHotels',
            method: "GET",
            params: {
                from: from,
                to: to
            }
        });      
    }
    hotelService.deleteHouseFeature = function (url, houseId, featureId) {
        return $http({
            url: url,
            method: "GET",
            params: {
                houseId: houseId, 
                featureId: featureId
            }
        });
    }
    hotelService.saveOrder = function (data) {
        return $http({
            url: serviceBase + 'api/orders/addOrder',
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                order: data
            }
        });
    }

    hotelService.getFeatures = function (url, id) {
        return $http({
            url: url,
            method: "GET",
            params: {
                id: id
            }
        });
    }
    hotelService.getUsers = function (url) {
        return $http({
            url: url,
            method: "GET"
        });
    }



    return hotelService;
}]);