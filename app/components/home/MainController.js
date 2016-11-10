// File: MainController.js
// Description: Practice JS / AngularJS file
// Function: to manage the search form.

(function() {
	/* will need to be in app.js later i.e. where module is created */
	var app = angular.module("AngularJSPractice");

	var MainController = function($scope, $interval, $location) {

		var decrementCountdown = function() {
			$scope.countdown-=1; 
			if ($scope.countdown<1) {
				$scope.search($scope.username);
			}
			
			//setTimeout(doWork, timeBeforeInvoking); = $timeout
			//setInterval(doWork, timeBeforeEACHInvoke); = $interval
		};
		
		var countdownInterval = null;
		var startCountdown = function () {
			countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown ); //5 = max iteration
		};
		
		$scope.search = function(username) {
			if(countdownInterval) {
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
			// Use location service to send us to /user/name
			$location.path("/user/" + username);
		};
		
		$scope.username = "ciarramarielle";
		$scope.countdown = 5;
		startCountdown();
	};
	
	app.controller("MainController", MainController);
	//array to minify these later on
	
}());
