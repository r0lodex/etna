// @codekit-prepend "_fixtures.js";
// @codekit-append "_directives.js";
// @codekit-append "_factories.js";
// @codekit-append "_controllers.js";

var etna = angular.module('etna', [
	'ngRoute',
	'ngResource',
	'ngCookies',
	'ui.materialize'
])
.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.currentpage = function(path) {
		// Returns boolean if the current page is 'path'
		return $location.path().indexOf(path) == 0;
	}
}])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: '../static/templates/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/personal', {
			templateUrl: '../static/templates/personal.html',
			controller: 'personalCtrl'
		})
		.when('/courses', {
			templateUrl: '../static/templates/courses.html',
			controller: 'courseCtrl'
		})
		.when('/assessment', {
			templateUrl: '../static/templates/assessment.html',
			controller: 'assessmentCtrl'
		})
		.when('/report', {
			templateUrl: '../static/templates/report.html',
			controller: 'reportCtrl'
		})
		.otherwise({
			redirectTo: '/'
		}
	);
}])