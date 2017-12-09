app.service('AddService', ['$http', function($http){
    var self = this; //this self refers to service, not something else in project


    self.addNewRental = function (newRental) {
        $http({
            method: 'POST',
            url: '/rent/',
            data: newRental,
        }).then(function (response) {
            console.log('response', response);
            // self.getRent();
            newRental.rent='',
            newRental.sqft='',
            newRental.city='';
        });
    }

    self.addNewListing = function (newListing) {
        console.log(newListing);
        $http({
            method: 'POST',
            url: '/sale/',
            data: newListing
        }).then(function (response) {
            console.log('response', response);
            // self.getSale();
            newListing.cost='',
            newListing.sqft='',
            newListing.city='';
        });
    }
}]);