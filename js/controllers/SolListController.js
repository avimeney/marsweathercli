// Controller for the page showing the available Sols and its average temperatures
app.controller("solListController", function ($scope, $log, $state, weatherService){

	var isLoading = false;
	var hasError = false;

	var init = function(){
		loadData();
	};

	var loadData = function(){
		isLoading = true;
		hasError = false;
		weatherService.getSolList().then(function(data){
			$scope.solList = data;
			isLoading = false;
		}, function(){
			isLoading = false;
			hasError = true;
			$scope.errorMessage = "An error has occurred while trying to load data from the server. Please, try again later.";
		});
	};

	var hasData = function(){
		return $scope.solList != null;
	}

	$scope.isLoadingMessageVisible = function(){
		return isLoading;
	};

	$scope.isErrorMessageVisible = function(){
		return !isLoading && hasError;
	};

	$scope.isDataSectionVisible = function(){
		return hasData() && !hasError;
	};

	$scope.isRefreshButtonVisible = function(){
		return hasData();
	};

	$scope.isRefreshButtonEnabled = function(){
		return !isLoading;
	};

	$scope.refreshButtonClicked = function(){
		loadData();
	};

	$scope.solClicked = function(solData){
		$state.go("view", {id: solData.id, solData: solData});
	};

	init();
});
