(function(){
	var module = angular.module("AngularJSPractice");

	var RepoController = function($scope, github, $routeParams) {
		$scope.username = $routeParams.username;
		$scope.reponame =  $routeParams.reponame;

		var onRepo = function(data){
			$scope.repo = data;
		};

		var onError = function(reason) {
			$scope.error = reason;
		};

		// now we can get object: repo
		github.getRepoDetails($scope.username, $scope.reponame).then(onRepo, onError);

	};

	module.controller("RepoController", RepoController);
}());