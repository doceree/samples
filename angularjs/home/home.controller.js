(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', 'md5'];
    function HomeController(UserService, $rootScope, md5) {
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
                const npi = '123456789';
                const email = 'test.user@gmail.com';
                const hashedNPI = md5.createHash(npi); 
                const hashedEmail = md5.createHash(email);
                var userObjUS = {
                    hashedNPI,
                    hashedEmail,
                }
                console.log("userObj >>>>>", userObjUS )

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