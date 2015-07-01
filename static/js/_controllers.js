angular.module('etna')
	.controller('rootCtrl', ['$log', '$scope', function($log, $scope) {
		// This is the parent controller of every controller below
		$log.info('root')
	}])

	.controller('sidebarCtrl', ['$log', '$scope', 'User', function($log, $scope, User) {
		// The purpose of this controller is to
		// populate user's data and display it in the sidebar
		$log.info(JSON.stringify(User));
		$scope.userdata = User;
	}])

	.controller('dashboardCtrl', ['$log', '$scope', 'CourseSummary', function($log, $scope, CourseSummary) {
		$log.info(CourseSummary)
		$scope.summary = CourseSummary;
	}])

	.controller('personalCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('personal')
	}])

	.controller('courseCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('course')
	}])

	.controller('assessmentCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('assessment')
	}])

	.controller('reportCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('report')
	}])