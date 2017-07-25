'use strict';
 
app.factory('BlogService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("BlogService...")
	
	var BASE_URL='http://localhost:8080/collaboration_backend'
		
    return {
         
            fetchAllBlogs: function() {
            	console.log("calling fetchAllBlogs ")
                    return $http.get(BASE_URL+'/blogs')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching Blogs');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
             
            createBlog: function(Blog){
            	console.log("calling create blog")
                    return $http.post(BASE_URL+'/createblogs/', Blog)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating blog');
                                        return $q.reject(errResponse);
                                    }
                            );
            }
        
            
           
         
    };
 
}]);