(function () {
	angular.module('nodeVlcCtrlr', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule'])
	.config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
				$routeProvider
				.when('/', {
					templateUrl : '/partials/fileList.html'
				}).otherwise({
					redirectTo : '/'
				});

				localStorageServiceProvider
				.setPrefix('nodeVlcCtrlr')
				.setStorageType('localStorage');
			}
		]);
}
	());
