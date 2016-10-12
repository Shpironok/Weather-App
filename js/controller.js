myapp.controller('WeatherCtrl', function ($scope, weatherService, citiesService) {
    $scope.weather = weatherService.getWeather();
    $scope.load = function (){

        if ($('#city').val() == "") {
            $('#city').css({'border-color' : 'red'});
        } else {
        	$('#city').css({'border-color' : '#ccc'});
        	$scope.weather = weatherService.getWeather();
        }
    }

    $scope.cities = function (){ 
        if ($('#city').val().length > 3 ) {
        	$scope.citytitle = citiesService.getCities();
        }
    }
});
