(function(){
	var github = function($http) {
		var getUser = function(username){
			return $http.get("https://api.github.com/users/"+username)
				.then(function(response){
					//promise.then --> response
					return response.data;
				});

			//returns a promise (.then)
		};
		var getRepos = function(user) {
			return $http.get(user.repos_url)
				.then(function(response){
					return response.data;
				});
		};

		return {
			//return github service
			getUser: getUser,
			getRepos: getRepos
		};
	};






	var module = angular.module("AngularJSPractice");
		// give me reference to the module (not create it, create+= []...

	// Register service with angular (name, functionName that returns object with name's API
	module.factory("github", github);
}());
