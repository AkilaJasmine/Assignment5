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

               promise.then(
                   function(response){
                       signUpCtrl.menu_item = response;
                       signUpCtrl.isValid = true;
               },
               function(data){
                   signUpCtrl.isValid = false;
                    signUpCtrl.inValidMsg = "No such menu number exists!!";
               });
            }
        }

        signUpCtrl.submit = function(user){
            user.favItem = signUpCtrl.menu_item;
            viewService.saveUser(user);
            signUpCtrl.completed = true;
        }
    };

})();