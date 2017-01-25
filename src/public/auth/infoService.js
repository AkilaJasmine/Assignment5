(function () {
    'use strict';

    angular.module('public')
    .service('infoService', infoService);

    infoService.$inject = ['MenuService'];

    function infoService(MenuService){
        var service = this;


        service.isValidFavDish = function(favDish){
            var response = MenuService.getMenuItems(favDish);
            var isValid;
            if(response.menu_items.length === 0){
                isValid = false;
            }else{
                isValid = true;
            }

            return isValid;
        }

        this.formSubmit = function(user){

        };
    }

})();