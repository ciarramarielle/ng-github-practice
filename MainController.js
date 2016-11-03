// File: MainController.js
// Description: Practice JS / AngularJS file

(function() {
	/* will need to be in app.js later i.e. where module is created */
	var app = angular.module("AngularJSPractice", []);
	
	
	var MainController = function($scope, $http, $interval, $log) {
		
		var onUserComplete = function(response) {
			// gets executed if http request is successful
			$scope.user = response.data;
			
			// also want to get user.repos_url
			$http.get($scope.user.repos_url)
				.then(onRepos, onError);
		};
		
		var onRepos  = function(response) {
			$scope.repos = response.data;
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
		
		var startCountdown = function () {
			$interval(decrementCountdown, 1000, $scope.countdown ); //5 = max iteration
		};
		
		
		
		// this is invoked by ng-submit
		$scope.search = function(username) {
			$log.info("Searching for " + username);
			$http.get("https://api.github.com/users/"+username)
				.then(onUserComplete, onError); 
		};
		
		$scope.username = "ciarramarielle";
		$scope.message = "GitHubViewer";
		$scope.repoSortOrder = "-stargazers_count";
		$scope.countdown = 5;
		startCountdown();
		$scope.$log = $log;


	};
	
	app.controller("MainController", ["$scope", "$http", "$interval", "$log", MainController]);
	//array to minify these later on
	
}());