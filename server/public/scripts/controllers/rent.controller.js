app.controller('RentController', ['RentService', function(RentService){ //bring the service into the controller
    var self = this;
    self.rent = RentService.rent; 
    RentService.getRent(); // 'get' function can be called here so it automatically updates when someone switches views
    self.addNewRental = RentService.addNewRental;
    
    }]);