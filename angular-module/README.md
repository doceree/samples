## Import the doceree module
	<script src="https://servedbydoceree.doceree.com/resources/p/doceree-header.min.js"></script>

## Inject the doceree module your app module 
	var app = angular.module('myApp', ['doceree-header'])

## Use $doceree service in the controller and various methods defined in this (example shared below).
	app.controller('myCtrl', function($scope, $doceree, $timeout) {
	    var userObj = {
	        hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
	        hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42'
	    }
    	$doceree.setUser(userObj)  //login

		// Start session for a patient
		$doceree.startSession()

		// Age passed as string 
		$doceree.setAge('25')

		// Supported values: Male, M, Female, F, Others, O
		$doceree.setGender('M')

		// Temperature should be passed as string; Supported values for temperature unit (Fahrenheit/Celcius/F/C)
		$doceree.setTemperature('88', 'F')

		// BP value as string; unit should be 'mmHg' 
		$doceree.setBP('58', 'mmHg')

		// Pulse value as string; unit should be 'BPM'    
		$doceree.setPulse('68', 'BPM')

		// Respiration value as string; unit shouold be 'BPM'
		$doceree.setRespiration('59', 'BPM')

		// HCPCS code passed as string array
		$doceree.setLabTests(['A0021', 'A0200', 'A0210', 'A0225'])

		// date format 'YYYY-MM-DD'
		// value: HCPCS code passed as string array
		$doceree.setLabTestsHistory([{ date: "2022-11-10", value: ['A0021', 'A0225'] }, { date: "2022-11-10", value: ['A0200', 'A0210'] }])

		// ICD codes passed as string array
		$doceree.setDiagnosis(['A00', 'A0109', 'A011', 'A012'])

		// date format 'YYYY-MM-DD'
		// value: ICD code passed as string array
		$doceree.setDiagnosisHistory([{ date: '2022-11-11', value: ['A00', 'A0109'] }, { date: '2022-11-10', value: ['A011', 'A012'] }])

		// NDC code passed as string array
		$doceree.setPrescription(['72865-0105-90', '72865-0103-30', '72865-0103-01', '72865-0109-01'])

		// date format 'YYYY-MM-DD'
		// value: NDC code passed as string array
		$doceree.setPrescriptionHistory([{ date: '2022-11-11', value: ['72865-0103-01'] }, { date: '2022-11-10', value: ['72865-0103-30', '72865-0105-90'] }])

		// End Session for the patient
		$doceree.endSession()

	    $timeout(function(){
	        $doceree.deleteUser() //logout
	    }, 10000)
	});




