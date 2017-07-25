'use strict';
 
app.controller('FriendController', ['UserService','$scope', 'FriendService','$location',
   '$rootScope',function(UserService,$scope, FriendService,$location,$routeParams,$rootScope) {
	console.log("FriendController...")
          var self = this;
          self.friend={id:'',userid:'',friendid:'',status:''};
          self.friends=[];
          
          self.user = {
        		userid : '',
				username : '',
  				password : '',
  				mobile : '',
  				address : '',
  				email : '',
  				isOnline:'',
  				role : '',
  				errorMessage : ''
  			};
  			self.users = [];
          
         self.sendFriendRequest=sendFriendRequest
         
         function sendFriendRequest(username)
         {

       	  console.log("->sendFriendRequest :"+username)
             FriendService.sendFriendRequest(username)
                 .then(
                              function(d) {
                                   self.friend = d;
                                  alert("Friend request sent")
                              },
                               function(errResponse){
                                   console.error('Error while sending friend request');
                               }
                      );
         
        	 
         };
          
             
          self.getMyFriends = function(){
        	  console.log("Getting my friends")
              FriendService.getMyFriends()
                  .then(
                               function(d) {
                                    self.friends = d;
                                    console.log("Got the friends list")
                                     	/* $location.path('/view_friend');*/
                               },
                                function(errResponse){
                                    console.error('Error while fetching Friends');
                                }
                       );
          };
          
          self.getFriendRequest = function(){
        	  console.log("Getting my friends request")
              FriendService.getFriendRequest()
                  .then(
                               function(d) {
                                    self.friends = d;
                                    console.log("Got the request friends list")
                                     	/* $location.path('/view_friend');*/
                               },
                                function(errResponse){
                                    console.error('Error while fetching request friends');
                                }
                       );
          };
            
       
         self.acceptFriendRequest = function(id){
              FriendService.acceptFriendRequest(id)
                      .then(
                    		  function(d) {
                                  self.friend = d;
                                 alert("Friend request accepted")
                             },
                              function(errResponse){
                                  console.error('Error while accepting friend request');
                              }
                  );
          };
          
          self.rejectFriendRequest = function(id){
              FriendService.rejectFriendRequest(id)
                      .then(
                    		  function(d) {
                                  self.friend = d;
                                 alert("Friend request rejected")
                             },
                              function(errResponse){
                                  console.error('Error while rejecting friend request');
                              } 
                  );
          };
 
         self.deleteFriend = function(id){
              FriendService.deleteFriend(id)
                      .then(
                              self.fetchAllFriends, 
                              function(errResponse){
                                   console.error('Error while deleting Friend.');
                              } 
                  );
          };
          
          self.fetchAllUsers = function() {
				UserService.fetchAllUsers().then(function(d) {
					self.users = d;
				}, function(errResponse) {
					console.error('Error while fetching Users');
				});
			};
            
 
          self.fetchAllUsers();
          self.getMyFriends();
          self.getFriendRequest();
 
     
 
      }]);