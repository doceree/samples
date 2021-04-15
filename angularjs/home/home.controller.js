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
                // var userObj = {
                //     hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
                //     hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42',
                // }

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