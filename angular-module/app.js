var app = angular.module('myApp', ['doceree-header'])
app.controller('myCtrl', function($scope, $doceree, $timeout) {
    var userObj = {
        hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
        hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42'
    }
    //login
    $doceree.setUser(userObj)

    //logout
    $timeout(function(){
        $doceree.deleteUser()
    }, 10000)
});