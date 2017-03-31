/**
 * Created by dinuksha on 3/31/17.
 */

angular.module('DriverApp', ['ngRoute']).config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : "index.html"
        })
        .when('/driver', {
            templateUrl : "AddDriver.html"
        })
        // .otherwise({
        //     redirectTo: '/home'
        // });
        $locationProvider.html5Mode(true);
}]);