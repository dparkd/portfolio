var app = angular.module('dparkd',['ngAnimate','ngRoute']).
	config(function($routeProvider){
		$routeProvider.
			when('/', {templateUrl:'views/home.html'}).
			when('/portfolio', {templateUrl:'views/portfolio.html'}).
			when('/hidden', {templateUrl:'views/hidden.html'}).
			when('/pictography', {templateUrl:'views/pictography.html'}).
			when('/posters', {templateUrl:'views/posters.html'}).
			when('/edge', {templateUrl:'views/edge.html'}).
			when('/photography', {templateUrl:'views/photography.html'}).
			when('/about', {templateUrl:'views/about.html'}).
			when('/TIL', {templateUrl:'views/til.html'}).
			when('/contact', {templateUrl:'views/contact.html'}).
			otherwise({redirectTo:'/', templateUrl:'views/home.html'});
			
			
});

function MainCtrl($scope, $location, $anchorScroll){
}


//SCROLLS TO TOP WHEN ROUTE CHANGES
app.run(['$rootScope', '$location', '$anchorScroll', '$routeParams',
  function ($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function () {

    $location.hash($routeParams.scrollTo);
    $anchorScroll();

  });
}]);