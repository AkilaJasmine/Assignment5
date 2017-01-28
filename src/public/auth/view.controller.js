(function (){
    'use strict';
    angular.module('public')
    .controller('viewController', viewController);

    viewController.$inject = ['userInfo','ApiPath'];

    function viewController(userInfo, ApiPath){
        var viewCtrl = this;
        if(userInfo === undefined){
            viewCtrl.isRegistered = false;
        }else{
            viewCtrl.isRegistered = true;
            viewCtrl.info = userInfo;
        }

        viewCtrl.basePath = ApiPath;
    }

})();