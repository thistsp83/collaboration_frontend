'use strict';

app.controller('HomeController',['$scope','UserService','$cookieStore','$rootScope',function($scope, UserService, $cookieStore, $rootScope) {
							console.log("HomeController...")
							var self = this;
							
							self.getCurrentUser = function()
							{
								console.log("loading current user if already logged in ")
								console.log("Current user: "+$rootScope.currentUser)
								if(!$rootScope.currentUser) //not undefined /empty /0/false
									{
									console.log("User not logged in")
									$rootScope.currentUser="";
									}
								return $rootScope.currentUser;
							}
							self.getCurrentUser();
							
} ]);