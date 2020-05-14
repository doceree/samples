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
            /*var userObj = {
                hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309', firstName:'Amar',lastName:'Akbar'};*/
            // var userObj = {"hashedNPI":"7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42"}
            /*var userObj = {
                    firstName:'SCOTT',lastName:'AMES', gender:'Male',specialization:'Anesthesiology', city:'Mumbai', 
                    zipCode: '74136', hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309'};*/
            /*var userObj = {
                firstName:'Amar',lastName:'Akbar', gender:'Male',specialization:'cardiology', city:'Mumbai', zipCode: '400001'};*/
                var userObj = {
                    firstName:'Amar',lastName:'Akbar', gender:'Male',specialization:'cardiology', city:'Mumbai', zipCode: '400001'};
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