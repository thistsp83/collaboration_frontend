'use strict';
 
app.factory('FriendService', ['$http', '$q','$rootScope', function($http, $q,$rootScope){
	
	console.log("FriendService...")
	
	var BASE_URL='http://localhost:8080/collaboration_backend'
    return {
         
		getMyFriends: function() {
                    return $http.get(BASE_URL+'/myFriends')
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                   null
                            );
            },
            
            getFriendRequest: function() {
                return $http.get(BASE_URL+'/getmyfriendRequest')
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                               null
                        );
        },
             
            sendFriendRequest: function(friendid){
                    return $http.get(BASE_URL+'/addFriend/'+friendid)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            acceptFriendRequest: function(id){
                    return $http.get(BASE_URL+'/acceptFriend/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
            rejectFriendRequest: function(id){
                return $http.get(BASE_URL+'/rejectFriend/'+id)
                        .then(
                                function(response){
                                    return response.data;
                                }, 
                                function(errResponse){
                                    console.error('Error while updating friend');
                                    return $q.reject(errResponse);
                                }
                        );
        },
             
            deleteFriend: function(id){
                    return $http['delete'](BASE_URL+'/friend/'+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while deleting friend');
                                        return $q.reject(errResponse);
                                    }
                            );
            }
            
           
         
    };
 
}]);