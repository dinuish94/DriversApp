/**
 * Created by dinuksha on 3/31/17.
 */
angular.module('DriverApp').controller('MainController',['$scope','DriverService',function ($scope, DriverService) {
    // $scope.drivers = [{
    //     firstName: 'John',
    //     lastName: 'Smith',
    //     birthday: '2000-10-01',
    //     vehicle: 'Nissan-GTR',
    //     ranking: 1
    // }, {
    //     firstName: 'Mike',
    //     lastName: 'Black',
    //     birthday: '2002-06-12',
    //     vehicle: 'Merc SLK 500',
    //     ranking: 2
    // }];
    $scope.drivers = DriverService.getDrivers();

    $scope.addDriver = function (driver) {
        // $scope.drivers.push(driver);
        DriverService.addDriver(driver);
        $scope.drivers = DriverService.getDrivers();
    }
}]);