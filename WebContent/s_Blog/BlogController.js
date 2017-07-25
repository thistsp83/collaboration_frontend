'use strict';
console.log(" start of blogController...")
app.controller('BlogController',['$scope','BlogService','$location','$rootScope','$http',
						function($scope, BlogService, $location,$routeParams, $rootScope,$http) {
							console.log("BlogController...")
							var self = this;
							self.blog = {
								userid : '',
								id : '',
								title: '',
								description: '',
								status : '',
								reason : '',
								posted_dt : '',
								errorCode : '',
								errorMessage : ''
							};
							self.blogs = [];

							self.fetchAllBlogs = function() {
								console.log("fetchAllBlogs...")
								BlogService.fetchAllBlogs()
										.then(function(d) {
													self.blogs = d;
													console.log("Got the blog list")
												},
												function(errResponse) {
													console.error('Error while fetching Blogs');
												});
							};
							
							

							self.createBlog = function(Blog) {
								console.log("createBlog...")
								BlogService.createBlog(Blog)
										.then(
												self.fetchAllBlogs,
												function(errResponse) {
													console
															.error('Error while creating Blog.');
												});
							};
							
							
							self.submit = function() {
								{
									console.log('Create new blog', self.Blog);
									self.createBlog(self.Blog);
								}
								self.reset();
							};

							self.reset = function() {
								self.Blog = {
										userid : '',
										id : '',
										title: '',
										description: '',
										status : '',
										reason : '',
										errorCode : '',
										errorMessage : ''
					};
								$scope.myForm.$setPristine(); // reset Form
							};
							
							self.fetchAllBlogs();
				          

						} ]);