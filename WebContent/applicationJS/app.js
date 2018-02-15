var app = angular.module("EventApp", [ 'ngRoute',
		'angularUtils.directives.dirPagination' ]);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : "partialPages/LoginPage.html",
		controller : "loginCtrl"

	}).when('/home', {
		templateUrl : "partialPages/DetailDashbord.html",
		controller : "detaildashboardCtrl"

	}).when('/newClientCreate', {
		templateUrl : "partialPages/NewClientCreation1.html",
		controller : "clientdetailCtrl"

	}).when('/updateClient', {
		templateUrl : "partialPages/UpdateClient1.html",
		controller : "clientdetailCtrl"

	}).when('/newTask', {
		templateUrl : "partialPages/NewTaskCreation1.html",
		controller : "taskCtrl"

	}).when('/updateTask', {
		templateUrl : "partialPages/UpdateTask1.html",
		controller : "taskCtrl"

	}).when('/newUser', {
		templateUrl : "partialPages/NewUserCreation1.html",
		controller : "userCtrl"

	}).when('/updateUser', {
		templateUrl : "partialPages/UpdateUser1.html",
		controller : "userCtrl"

	}).when('/logoutUser', {
		templateUrl : "partialPages/LoginPage.html",
		controller : "logoutCtrl"

	}).otherwise({
		redirectTo : '/'

	})

});

app.directive("datepicker", function() {
	return {
		restrict : "A",
		require : "ngModel",
		link : function(scope, elem, attrs, ngModelCtrl) {
			var updateModel = function(dateText) {
				scope.$apply(function() {
					ngModelCtrl.$setViewValue(dateText);
				});
			};
			var options = {
				dateFormat : "yy-mm-dd",
				onSelect : function(dateText) {
					updateModel(dateText);
				}
			};
			elem.datepicker(options);
		}
	}
});