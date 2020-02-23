// Controller for the page showing detailed info about a specific Sol
app.controller("solViewController", function ($scope, $log, $state, $transition$, weatherService){

	var isLoading = false;
	var hasError = false;

	var init = function(){
		$scope.solData = $transition$.params().solData;
		/*
		 * If the user refreshs the page, transition's data is lost and we need
		 * to reload data from server
		 */
		if ($scope.solData == null){
			loadData();
		}
	};

	var loadData = function(){
		isLoading = true;
		hasError = false;
		weatherService.getSolList().then(function(data){
			// Searching the data for the desired Sol within the Sol list
			var solData = data.find(function(solData){
				return solData.id == $transition$.params().id;
			});
			if (solData){
				$scope.solData = solData;
			}else{
				hasError = true;
				$scope.errorMessage = "No data found for Sol #"+$transition$.params().id;
			}
			isLoading = false;
		}, function(){
			isLoading = false;
			hasError = true;
			$scope.errorMessage = "An error has occurred while trying to load data from the server. Please, try again later.";
		});
	};

	var hasData = function(){
		return $scope.solData != null;
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

	$scope.returnButtonClicked = function(){
		$state.go("list");
	};

	init();
});
