app.service('SaleService', ['$http', function ($http) {
    var self = this;

    self.sale = { list: [] };

    self.getSale = function () {
        $http({
            method: 'GET',
            url: '/sale/',
        }).then(function (response) {
            console.log('response', response.data);
            self.sale.list = response.data;
        });
    };

    self.deleteListing = function (listing) {
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