/*
 * Mars Weather API communication service.
 */
app.factory("weatherService", function ($http, $q, appConst){

	/*
	 * Accesses the Mars Weather API returning the available data.
	 */
	var _getSolList = function(){
		var deferred = $q.defer();
		var requestConfig = {
			headers: {
			 	"Authorization": "Bearer "+appConst.AUTH_TOKEN,
			}
		};
		$http.get(appConst.APP_BASE_PATH+"/api/v1/weather/list/", requestConfig).then(function(response){
			deferred.resolve(response.data);
		}, function(response){
			var data = {
				cause: "Weather service access error"
			};
			deferred.reject(data);
		});
		return deferred.promise;
	};

	return {
		getSolList: _getSolList,
	};
});
