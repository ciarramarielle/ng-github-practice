// File: script.js
// Description: Practice JS / AngularJS file


// ng can't find Controller if global anymore. Use IIFE
// ng passes SCOPE to function, controller manipulates that scope (not the HTML view directly)
//	by attaching a model (i.e. scope.message)
//	then we use data-binding to put into the view
(function() {

	var app = angular.module("AngularJSPractice", []);


	var MainController = function($scope) {
		// declare MainCtrl function
		$scope.message = "Hello world!";
	};

	app.controller("MainController", MainController);
}());
