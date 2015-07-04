angular.module('etna')
	.factory('User', ['$resource', function($resource) {
		return $resource('/static/fixtures/user.json', {}, {
			query: { method: 'GET', isArray: false }
		})
	}])

	.factory('CourseSummary', ['$resource', function($resource) {
		return $resource('/static/fixtures/coursesummary.json', {}, {
			query: { method: 'GET', isArray: true }
		})
	}])

	.factory('Courses', ['$resource', function($resource) {
		return $resource('/static/fixtures/courses.json', {}, {
			query: { method: 'GET', isArray: true }
		})
	}])

	.factory('ChartData', ['$resource', function($resource) {
		return $resource('/static/fixtures/chartdata.json', {}, {
			query: { method: 'GET', isArray: false }
		})
	}])