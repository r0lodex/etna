angular.module('etna')
	.controller('rootCtrl', ['$log', '$scope', 'amMoment', function($log, $scope, amMoment) {
		// This is the parent controller of every controller below
		$log.info('root');

		// Table Sort By Headers
		$scope.sort = function(field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		}
		$scope.date = function(str) {
			var a = Date.parse(str)
			return moment(a).format('DD MMM YYYY');
		}
	}])

	.controller('sidebarCtrl', ['$log', '$scope', 'User', function($log, $scope, User) {
		// The purpose of this controller is to
		// populate user's data and display it in the sidebar
		$log.info(JSON.stringify(User));
		$scope.userdata = User;
	}])

	.controller('dashboardCtrl', ['$log', '$scope', 'CourseSummary', function($log, $scope, CourseSummary) {
		$scope.summary = {
			fields: Object.keys(CourseSummary[0]),
			data: CourseSummary
		}
		$log.info($scope.summary.fields)
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