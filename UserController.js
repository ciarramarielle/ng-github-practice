// File: UserController.js
// display user details
(function() {
	/* will need to be in app.js later i.e. where module is created */
	var app = angular.module("AngularJSPractice");
	
	// $routeParams --> :<param_name> in app.js
	var UserController = function($scope, github, $routeParams) {
		
		var onUserComplete = function(data) {
			// gets executed if http request is successful
			$scope.user = data;
			
			// also want to get user.repos_url
			github.getRepos($scope.user).then(onRepos, onError);
		};
		
		var onRepos  = function(data) {
			$scope.repos = data;
		};
		
		
		var onError = function(reason) {
			$scope.error = "could not fetch the data";
		};

		
		$scope.username = $routeParams.username;
		$scope.repoSortOrder = "-stargazers_count";
		$scope.countdown = 5;
		github.getUser($scope.username).then(onUserComplete, onError);
	};
	
	app.controller("UserController", UserController);
	//array to minify these later on
	
}());
