app.service('SaleService', ['$http', function ($http) {
    var self = this; //this self refers to service, not something else in project

    self.sale = { list: [] };  //empty array for rentals to go into, use object

    self.getSale = function () {
        $http({
            method: 'GET',
            url: '/sale/',
        }).then(function (response) {
            console.log('response', response.data); ///response.data will just send back the array of objects, not all the extra info
            self.sale.list = response.data;
        });
    };

    self.deleteListing = function (listing) {
        console.log(listing);
        $http({
            method: 'DELETE',
            url: '/sale/' + listing._id,
            data: listing
        }).then(function (response) {
            console.log('response', response);
            self.getSale();
        });
    };

}]);