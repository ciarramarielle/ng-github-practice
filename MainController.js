// File: MainController.js
// Description: Practice JS / AngularJS file

(function() {
	/* will need to be in app.js later i.e. where module is created */
	var app = angular.module("AngularJSPractice", []);
	
	
	var MainController = function($scope, github, $interval, $log, $anchorScroll, $location) {
		
		var onUserComplete = function(data) {
			// gets executed if http request is successful
			$scope.user = data;
			
			// also want to get user.repos_url
			github.getRepos($scope.user).then(onRepos, onError);
		};
		
		var onRepos  = function(data) {
			$scope.repos = data;

			// after loading user, we want to view userDetails div.
			$location.hash("userDetails");
			$anchorScroll();
		};
		
		
		var onError = function(reason) {
			$scope.error = "could not fetch the data";
		};
		
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
		
		
		
		// this is invoked by ng-submit
		$scope.search = function(username) {
			$log.info("Searching for " + username);
			github.getUser(username).then(onUserComplete, onError);
			//.get("https://api.github.com/users/"+username)
			//	.then(onUserComplete, onError); 
			if(countdownInterval) {
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
		};
		
		$scope.username = "ciarramarielle";
		$scope.message = "GitHubViewer";
		$scope.repoSortOrder = "-stargazers_count";
		$scope.countdown = 5;
		startCountdown();
		$scope.$log = $log;


	};
	
	app.controller("MainController", ["$scope", "github", "$interval", "$log", "$anchorScroll", "$location", MainController]);
	//array to minify these later on
	
}());
