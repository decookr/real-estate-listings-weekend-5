app.controller('SaleController', ['SaleService', function (SaleService) { 
    var self = this;
    self.sale = SaleService.sale;
    SaleService.getSale(); 
    self.addNewListing = SaleService.addNewListing;
    self.deleteListing = SaleService.deleteListing;
}]);