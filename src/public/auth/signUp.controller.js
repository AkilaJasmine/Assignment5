(function () {
    'use strict';

    angular.module('public')
    .controller('signUpController', signUpController);

    signUpController.$inject = ['viewService'];

    function signUpController(viewService){
        var signUpCtrl = this;

        signUpCtrl.isValidFavDish = function(favDish){
            signUpCtrl.inValidMsg = "";
            if(favDish === undefined){
                signUpCtrl.errorMsg = "Field Should not be empty!!!";
            }else{
               var promise = viewService.isValidItem(favDish.toUpperCase());

               promise.then(function(response){
                   if(response.menu_items === undefined || response.menu_items.length === 0){
                       signUpCtrl.isValid = false;
                       signUpCtrl.inValidMsg = "No such menu number exists!!";
                   }else{
                       signUpCtrl.isValid = true;
                   }
               });
            }
        }

        signUpCtrl.submit = function(user){
            viewService.saveUser(user);
            signUpCtrl.completed = true;
        }
    };

})();