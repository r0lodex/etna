angular.module('etna')

	// Root Controller
	.controller('rootCtrl', ['$log', '$scope', 'amMoment', 'Notification', function($log, $scope, amMoment, Notification) {
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

		// Events
		$scope.$on('profile:saved', function() {
			Notification.success('Profile has been successfully updated')
		})
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

	.controller('dashboardCtrl', ['$log', '$scope', 'Courses', 'CourseSummary', 'ChartData', function($log, $scope, Courses, CourseSummary, ChartData) {
		CourseSummary.query(function(response) {
			$scope.summary = {
				fields: Object.keys(response[0]),
				data: response
			}
		});

		$scope.courses = Courses.query();

		// Chart Data
		ChartData.query(function(response) {
			$scope.score_card = response.score_card;
			$scope.skill_chart = response.skill_chart;
			$scope.ass = response.assessment;
		});
	}])

	// Profile Controller
	.controller('profileCtrl', ['$log', '$scope', 'User', 'Upload', function($log, $scope, User, Upload) {

		// This object is to populate selection items.
		$scope.selections = {
			gender: [
				{id: 1, name:'Male' },
				{id: 2, name:'Female' }
			],
			position_level : [
				{id: 1, name:'Junior' },
				{id: 2, name:'Non-Executive' },
				{id: 3, name:'Executive' },
				{id: 4, name:'Manager' }
			]
		};

		$scope.data = User.query();

		$scope.upload = function(files) {
			if (files && files.length) {
				for (var i = 0; i < files.length; i++) {
	                var file = files[i];
	                Upload.upload({
	                    url: '/api/user_profile/',
	                    method: 'PUT',
	                    file: file,
	                    fileFormDataName: 'avatar'
	                });
	            }
			}
		};

		$scope.dummySave = false;
		$scope.save = function() {
			$scope.dummySave = true;
			$scope.$emit('profile:saved');
		}
	}])

	// Course Controller
	.controller('courseCtrl', ['$log', '$scope', 'Courses', function($log, $scope, Courses) {
		$scope.courses = Courses.query();
	}])

	// Assessment Controller
	.controller('assessmentCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('assessment')
	}])

	// Report Controller
	.controller('reportCtrl', ['$log', '$scope', function($log, $scope) {
		$log.info('report')
	}])