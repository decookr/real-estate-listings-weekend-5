app.service('AddService', ['$http', function ($http) {
    var self = this;

    //service for adding new rentals
    self.addNewRental = function (newRental) {
        $http({
            method: 'POST',
            url: '/rent/',
            data: newRental,
        }).then(function (response) {
            console.log('response', response);
            newRental.rent = '',
                newRental.sqft = '',
                newRental.city = '';
        });
    }

     //service for adding new for sale listings
    self.addNewListing = function (newListing) {
        console.log(newListing);
        $http({
            method: 'POST',
            url: '/sale/',
            data: newListing
        }).then(function (response) {
            console.log('response', response);
            newListing.cost = '',
                newListing.sqft = '',
                newListing.city = '';
        });
    }
}]);