app.config(function($stateProvider, $urlRouterProvider) {

	// Shows the available Sols with its average temperatures
	$stateProvider.state('list', {
		url: '/list',
		templateUrl: 'view/solList.html',
		controller: "solListController"
	});

	// Shows more details about a specific Sol
	$stateProvider.state('view', {
		url: '/view/:id',
		templateUrl: 'view/viewSol.html',
		controller: "solViewController",
		params: {
			id: null,
			solData: null
		}
	});

	$urlRouterProvider.otherwise("list");
});
