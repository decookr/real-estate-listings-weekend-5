app.service('RentService', ['$http', function ($http) {
    var self = this; //this self refers to service, not something else in project

    self.rent = { list: [] };  //empty array for rentals to go into, use object

    self.getRent = function () {
        $http({
            method: 'GET',
            url: '/rent/',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.rent.list = response.data;
        });
    };


    self.deleteRental = function (rentalToDelete) {
        console.log(rentalToDelete);
        $http({
            method: 'DELETE',
            url: '/rent/' + rentalToDelete.id,
        }).then(function (response) {
            console.log('response', response);
            self.getRent();
        });
    };

}]);