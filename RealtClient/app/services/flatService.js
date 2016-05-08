"use strict";
angular.module("AngularAuthApp").factory("flatService", ["$http", function ($http) {

    var flatService = {};
    flatService.getFlats = function () {
        return $http.get(serviceBase + 'api/flat/getall').then(function (results) {
            return results;
        });
    };
    
    flatService.getRealtTypes = function (url) {
        return $http({
            url: url,
            method: "GET"
        });
    }
    flatService.deleteFlatFeature = function (url, flatId, featureId) {
        return $http({
            url: url,
            method: "GET",
            params: {
                flatId: flatId, 
                featureId: featureId
            }
        });
    }

    flatService.getFeatures = function (url, id) {
        return $http({
            url: url,
            method: "GET",
            params: {
                id: id
            }
        });
    }
    flatService.getUsers = function (url) {
        return $http({
            url: url,
            method: "GET"
        });
    }

    flatService.addFlat = function (url, data) {
        return $http.post(url, { flat: data });
    };

    flatService.addFeature = function (url, id, feature) {
        return $http.post(url, { id: id, featureId: feature });
    };
    flatService.changeFlat = function (url, data) {
        return $http.post(url, { flat: data });
    };


    flatService.removeImage = function (url, id, data) {
        return $http.post(url, { url: data, id: id });
    };

    flatService.saveRoom = function (url, data) {
        return $http.post(url, { room: data });
    };

    flatService.deleteFlat = function (url, id) {
        return $http({
            url: url,
            method: "GET",
            params: {
                id: id
            }
        });
    };
    flatService.setFlatId = function (url, id) {
        return $http({
            url: url,
            method: "GET",
            params: {
                id: id
            }
        });
    };


    return flatService;
}]);