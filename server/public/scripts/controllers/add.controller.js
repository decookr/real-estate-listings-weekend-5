app.controller('AddController', ['AddService', function (AddService) {
    var self = this;
    self.add = AddService.add;
    self.addNewRental = AddService.addNewRental;
    self.addNewListing = AddService.addNewListing;
}]);