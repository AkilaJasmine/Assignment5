(function(){
    'use strict';

    angular.module('public')
    .service('viewService', viewService);

    viewService.$inject = ['MenuService'];

    function viewService(MenuService){
        var service = this;
        var userInfo;
        service.isValidItem = function(item){
            return MenuService.getMenuItem(item);
        }

        service.saveUser = function(user){
            userInfo = user;
        }

        service.getUserInfo = function(){
            return userInfo;
        }
    }

})();