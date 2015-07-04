// @codekit-prepend "_fixtures.js";
// @codekit-append "_directives.js";
// @codekit-append "_factories.js";
// @codekit-append "_controllers.js";

var etna = angular.module('etna', [
	'ngRoute',
	'ngResource',
	'ngCookies',
	'ui.bootstrap',
	'ui-notification',
	'angularMomentHijri',
	'720kb.datepicker',
	'chart.js',
	'ngFileUpload',
])

.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.currentpage = function(path) {
		// Returns boolean if the current page is 'path'
		return $location.path().indexOf(path) == 0;
	};

	$rootScope.section_title = function() {
		return $location.path().replace('/', '').toUpperCase();
	};
}])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: '../static/templates/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/profile', {
			templateUrl: '../static/templates/profile.html',
			controller: 'profileCtrl'
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
			redirectTo: '/dashboard'
		}
	);
}])

.directive('formField', function() {
	return {
		restrict: 'E',
		templateUrl: '/static/templates/directives/form-field.html',
		replace: true,
		scope: {
			record: '=',
			options: '=',
			field: '@',
			fieldtype: '@',
			required: '@',
			label: '@'
		},
		link: function(scope, elem, attr) {
			scope.$on('submit:invalid', function() {
				scope[scope.field].$setDirty();
			});
		}
	};
})

// Converts keys from JSON e.g course_code to Course Code.
.filter('labelCase', function() {
	return function(input) {
		input = input.replace(/_/g, ' ');
		return input;
	}
})