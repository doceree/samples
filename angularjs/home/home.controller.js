(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
            
                // India user details -
                var userObj = {
                    firstName: "Akhileshcomp", 
                    lastName: "Guptacomp", 
                    specialization: "Pediatrics", 
                    gender: "Male",
                    email: "guptacomp@gmail.com",
                    city: "gurugram",
                    zipCode: "122001", 
                }

                // US user details -
                var userObjUS = {
                    hashedNPI: "6d78392a5886177fe5b86e585a0b695a2bcd01a05504b3c4e38bc8eeb21e8326",
                    hashedEmail: "a9b44ed27d9d348d895fecb19f4dd3c09708b2432e7cf3cd25a1fc90d0966c7d",
                }
                
			docereeLogIn(userObj);
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }

})();