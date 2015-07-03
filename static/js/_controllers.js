angular.module('etna')

	// Root Controller
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

	// Sidebar Controller
	.controller('sidebarCtrl', ['$log', '$scope', 'User', function($log, $scope, User) {
		// The purpose of this controller is to
		// populate user's data and display it in the sidebar
		$log.info(JSON.stringify(User));
		$scope.userdata = User.query();
	}])

	.controller('dashboardCtrl', ['$log', '$scope', 'CourseSummary', function($log, $scope, CourseSummary) {
		CourseSummary.query(function(response) {
			$scope.summary = {
				fields: Object.keys(response[0]),
				data: response
			}
		});
	}])

	// Profile Controller
	.controller('profileCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('personal')
		$scope.showTabs = true
	}])

	// Course Controller
	.controller('courseCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('course')
	}])

	// Assessment Controller
	.controller('assessmentCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('assessment')
	}])

	// Report Controller
	.controller('reportCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('report')
	}])