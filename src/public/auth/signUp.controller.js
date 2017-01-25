(function () {
    'use strict';

    angular.module('public')
    .controller('signUpController', signUpController);

    signUpController.$inject = ['infoService'];

    function signUpController(infoService){
        var signUpCtrl = this;

        signUpCtrl.isValidFavDish = function(favDish){
            signUpCtrl.favDishValid = infoService.isValidFavDish(favDish.toUpperCase());
        }

        signUpController.submit = function(user){
           
            if(signUpCtrl.isValidFavDish){
                infoService.formSubmit(user);
                signUpCtrl.valid = true;
            }
            
            
        }
    };

})();