app.controller('SaleController', ['SaleService', function(SaleService){ //bring the service into the controller
    var self = this;
    self.sale = SaleService.sale; 
    SaleService.getSale(); // 'get' function can be called here so it automatically updates when someone switches views
    // self.addNewHero = HeroService.addNewHero;
    }]);