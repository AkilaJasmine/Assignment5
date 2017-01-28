(function (){
    'use strict';

    angular.module('public')
    .component('viewComponent', {
        templateUrl : 'src/public/auth/viewInfo.html',
        bindings : {
            info : '<',
            path : '='
        }
    });

})();