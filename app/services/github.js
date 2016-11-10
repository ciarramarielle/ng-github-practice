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

      var getRepoDetails = function(username, reponame){
          var repo;
          var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
		          return $http.get(repoUrl)
                      .then(function(response){
                          repo = response.data;
                          return $http.get(repoUrl + "/contributors");
                      })
                      .then(function(response){
                          repo.contributors = response.data;
                          return repo;
                      });
      };
      
      return {
          getUser: getUser,
          getRepos: getRepos,
          getRepoDetails: getRepoDetails
      };
        
	};






	var module = angular.module("AngularJSPractice");
		// give me reference to the module (not create it, create+= []...

	// Register service with angular (name, functionName that returns object with name's API
	module.factory("github", github);
}());


		/*
		var getRepoInfo = function(username, reponame) {
			var api_url = "https://api.github.com/repos/" + username +"/" + reponame;
			return $http.get(api_url)
					.then(function(response) {
						return response.data;
					});
		};
		var getRepoContributors = function(repo) {
			return $http.get(repo.contributors_url)
				.then(function(response){
					return response.data;
				});
		};

		return {
			//return github service
			getUser: getUser,
			getRepos: getRepos,
			getRepoInfo: getRepoInfo,
			getRepoContributors: getRepoContributors
		};*/