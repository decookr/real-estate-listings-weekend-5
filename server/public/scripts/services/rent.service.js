app.service('RentService', ['$http', function ($http) {
    var self = this;
    self.rent = { list: [] };

    self.getRent = function () {
        $http({
            method: 'GET',
            url: '/rent/',
        }).then(function (response) {
            console.log('response', response.data);
            self.rent.list = response.data;
        });
    };

    self.deleteRental = function (rental) {
        $http({
            method: 'DELETE',
            url: '/rent/' + rental._id,
            data: rental
        }).then(function (response) {
            console.log('response', response);
            self.getRent();
        });
    };
}]);