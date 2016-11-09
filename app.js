// app.js
// will define the application. This is where we'll CREATE the app module
( function() {
	var app = angular.module("AngularJSPractice", ["ngRoute"]);
			// dependency: ngRoute

	// define routes in config function
	app.config(function($routeProvider){
		// main: search user
		$routeProvider
			.when("/main", {
				// when user @ /main,
				templateUrl: "main.html",
				controller: "MainController"
			})
			.when("/user/:username", {
				templateUrl: "user.html",
				controller: "UserController"
			})
			.otherwise({redirectTo:"/main"}); //if dont know this URL...

			//.when = register route
		// user: display user details
		//$routeProvider


		// repo: display repo details
	
	});


}());
