angular.module('myUi', [])
.directive('myPanel', function() {
	return {
		restrict: 'E',
		transclude: true, 
		scope: {
			myTitle: '@'
		},
		templateUrl: '../common/directives/my-ui/my-panel.html'
	}
}).directive('myButtom', function() {

	return {
		restrict: 'E', 
		scope: {
			label: '@',
			callback: '&action'
		}, 
		template: '<buttom class="btn btn-primary" ng-click="callback()">{{label}}</buttom>'
	}
}).directive('myNavbar', function() {
	return {
		restrict: 'E',
		scope: {
			brandTitle: '@', 
			brandUrl: '@', 
			brandLogo: '@'
		}, 
		transclude: true,
		templateUrl:  '../common/directives/my-ui/my-navbar.html'
	}
});