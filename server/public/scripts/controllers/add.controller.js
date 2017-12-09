app.controller('AddController', ['AddService', function(AddService){ //bring the service into the controller
    var self = this;
    self.add = AddService.add; 
    // RentService.getRent(); // 'get' function can be called here so it automatically updates when someone switches views
    self.addNewRental = AddService.addNewRental;
    self.addNewListing = AddService.addNewListing;
    
    }]);