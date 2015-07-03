angular.module('etna')

	// Root Controller
	.controller('rootCtrl', ['$log', '$scope', 'amMoment', function($log, $scope, amMoment) {
		// This is the parent controller of every controller below
		$log.info('root');

		// Table Sort By Headers
		$scope.sort = function(field) {
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		};

		// Generic Date Parser
		$scope.date = function(str) {
			var a = Date.parse(str)
			return moment(a).format('DD MMM YYYY');
		}
	}])

	// Sidebar Controller
	.controller('sidebarCtrl', ['$log', '$scope', 'User', function($log, $scope, User) {
		// The purpose of this controller is to
		// populate user's data and display it in the sidebar
		$scope.userdata = User.query();
		$scope.navigation = [
			{ name: 'dashboard', icon: 'blackboard' },
			{ name: 'profile', icon: 'v-card' },
			{ name: 'courses', icon: 'book' },
			{ name: 'assessment', icon: 'graduation-cap' },
			{ name: 'report', icon: 'bar-graph' }
		]
	}])

	.controller('dashboardCtrl', ['$log', '$scope', 'CourseSummary', 'ChartData', function($log, $scope, CourseSummary, ChartData) {
		CourseSummary.query(function(response) {
			$scope.summary = {
				fields: Object.keys(response[0]),
				data: response
			}
		});

		// Chart Data
		ChartData.query(function(response) {
			$scope.score_card = response.score_card;
			$scope.skill_chart = response.skill_chart;
			$scope.ass = response.assessment;
		});
	}])

	// Profile Controller
	.controller('profileCtrl', ['$log', '$scope', 'User', function($log, $scope, User) {
		$log.info('personal')

		$scope.selections = {
			gender: [
				{id: 1, name:'Male' },
				{id: 2, name:'Female' }
			]
		}

		$scope.data = User.query();
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