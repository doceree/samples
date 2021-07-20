## import the doceree module
	<script src="https://servedbydoceree.doceree.com/resources/p/doceree-header.min.js"></script>

## inject the doceree module your app module 
	var app = angular.module('myApp', ['doceree-header'])

## Use $doceree service in the controller and its method setUser and deleteUser for login/logout.
	app.controller('myCtrl', function($scope, $doceree, $timeout) {
	    var userObj = {
	        hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
	        hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42'
	    }
    	$doceree.setUser(userObj)  //login

    
	    $timeout(function(){
	        $doceree.deleteUser() //logout
	    }, 10000)
	});