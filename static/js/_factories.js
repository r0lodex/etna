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