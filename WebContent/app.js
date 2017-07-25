var app = angular.module('myApp', ['ngRoute','ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl : 'home/home.html' ,
		controller : 'HomeController'
		
	})
	
	.when('/login', {
		templateUrl : 'user/login.html' ,
		controller : 'UserController'
	})
	
	.when('/register', {
		templateUrl : 'user/register.html' ,
		controller : 'UserController'
	})
	
	//Blog related mapping
	
	.when('/create_blog', {
		templateUrl : 'blog/create_blog.html' ,
		controller : 'BlogController'
	})
	.when('/list_blog', {
		templateUrl : 'blog/list_blog.html' ,
		controller : 'BlogController'
	})
	.when('/view_blog', {
		templateUrl : 'blog/view_blog.html' ,
		controller : 'BlogController'
	})
	
	//Chat mapping
	.when('/chat', {
		templateUrl : 'chat/chat.html' ,
		controller : 'ChatController'
	})
	
	
	/*.when('/logout', {
		templateUrl : 'home/home.html' ,
		controller : 'HomeController'
	})*/
	
	//Friend related mapping
	.when('/add_friend', {
		templateUrl : 'friend/add_friend.html' ,
		controller : 'FriendController'
	})
	
	.when('/view_friend', {
		templateUrl : 'friend/view_friend.html' ,
		controller : 'FriendController'
	})
	
	.when('/search_friend', {
		templateUrl : 'friend/search_friend.html' ,
		controller : 'FriendController'
	})
	.when('/about', {
		templateUrl : 'about.html' ,
		
	})
	.when('/create_forum', {
    templateUrl : 'forum/create_forum.html',
    controller  : 'ForumController'
  })
  
  .when('/view_forum', {
    templateUrl : 'forum/view_forum.html',
    controller  : 'ForumController'
  })
	
	
	.otherwise({redirectTo: '/'});
});

app.run(function ($rootScope, $location, $cookieStore, $http){

	$rootScope.$on('$locationChangeStart', function(event, next, current){
	console.log("$locationChangeStart")
	//redirect to login page if not logged in and typing to access a restricted page

	var restrictedPage=$.inArray($location.path(), ['/','/login','/register','/view_blog','/list_blog','/about']) ===-1;
	console.log("restrictedPage:" +restrictedPage)
	var loggedIn=$rootScope.currentUser.username;
	console.log("loggedIn:"+loggedIn)
	if(restrictedPage & !loggedIn){
	console.log("Navigating to login page:")
	alert("You are not logged in so please login")
	$location.path('/login');
	}
	});

	//keep user logged in after page refresh
	$rootScope.currentUser = $cookieStore.get('currentUser') || {};
	if($rootScope.currentUser){
	$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.currentUser;
	
	}
	});