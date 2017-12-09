app.controller('RentController', ['RentService', function (RentService) {
    var self = this;
    self.rent = RentService.rent;
    RentService.getRent();
    self.addNewRental = RentService.addNewRental;
}]);