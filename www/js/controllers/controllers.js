app.controller('RestaurantCtrl', function($scope, $timeout, $http) {

	$scope.restaurants = [ //this will eventually become the empty array where GET request will store the restaurants into.
      {
        "name": "Delicious Pho",
        "budget": "$10",
        "phone": "(604) 559-4088",
        "address": "255 Robson St, Vancouver, BC V6B 0E8",
        "img": "img/delicious.jpg",
        "cuisine": "Vietnamese",
        "rating": "7" 
      },
      {
        "name": "Jinya Ramen",
        "budget": "$12",
        "phone": "(604) 568-9711",
        "address": "270 Robson St, Vancouver, BC V6B 0E7",
        "img": "img/jinya.jpg",
        "cuisine": "Japanese",
        "rating": "8" 
      },
      {
        "name": "Super Chef Grill",
        "budget": "$7",
        "phone": "(604) 681-7189",
        "address": "280 Robson St, Vancouver, BC V6B 6A1",
        "img": "img/super.jpg",
        "cuisine": "Chinese",
        "rating": "7" 
      },
      {
        "name": "Chipotle",
        "budget": "$9",
        "phone": "(604) 683-6394",
        "address": "818 Howe St, Vancouver, BC V6Z 1N4",
        "img": "img/chipotle.png",
        "cuisine": "Mexican",
        "rating": "8" 
      },
      {
        "name": "Grounds For Appeal",
        "budget": "$9",
        "phone": "(604) 681-8558",
        "address": "845 Cambie St, Vancouver, BC V6B",
        "img": "img/grounds.jpg",
        "cuisine": "Indian",
        "rating": "8" 
      },
      {
        "name": "Patron Tacos & Cantina",
        "budget": "$12",
        "phone": "(604) 558-3368",
        "address": "265 Robson St, Vancouver, BC V6B 6A1",
        "img": "img/patron.jpg",
        "cuisine": "Mexican",
        "rating": "8" 
      },
      {
        "name": "Hamilton Street Grill",
        "budget": "$11",
        "phone": "(604) 331-1511",
        "address": "1009 Hamilton St, Vancouver, BC V6B 6K6",
        "img": "img/hamilton.png",
        "cuisine": "Western",
        "rating": "8" 
      },
      {
        "name": "Rice N' Spice",
        "budget": "$9",
        "phone": "(604) 568-4446",
        "address": "883 Hamilton St, Vancouver, BC V6R 2R7",
        "img": "img/rice.jpg",
        "cuisine": "Indian",
        "rating": "8" 
      },
      {
        "name": "Fresh Bowl",
        "budget": "$10",
        "phone": "(604) 688-8565",
        "address": "1128 Pacific Blvd, Vancouver, BC V6Z 2X7",
        "img": "img/fresh.jpg",
        "cuisine": "South East Asian",
        "rating": "8" 
      },
      {
        "name": "DD Mau",
        "budget": "$9",
        "phone": "(604) 684-4446",
        "address": "1239 Pacific Blvd, Vancouver, BC V6Z 2V2",
        "img": "img/dd.jpg",
        "cuisine": "Vietnamese",
        "rating": "8" 
      },
      {
        "name": "Yopo Cafe",
        "budget": "$11",
        "phone": "(604) 609-9676",
        "address": "1122 Homer St, Vancouver, BC V6B 2X6",
        "img": "img/yopo.gif",
        "cuisine": "Chinese",
        "rating": "8" 
      },
      {
        "name": "Sushi Maro",
        "budget": "$11",
        "phone": "(778) 371-8332",
        "address": "1168 Hamilton St #101, Vancouver, BC V6B 2S2",
        "img": "img/maro.jpg",
        "cuisine": "Japanese",
        "rating": "8" 
      },
      {
        "name": "Urban Thai Bistro",
        "budget": "$11",
        "phone": "(604) 408-7788",
        "address": "1119 Hamilton St, Vancouver, BC V6B 5P6",
        "img": "img/urban.jpg",
        "cuisine": "Thai",
        "rating": "8" 
      }
    ];

    //initialize the current restaurant
    $scope.currentRestaurant = angular.copy($scope.restaurants[0]);

     //fired when you random generate restaurant
    $scope.sendFeedback = function(bool) {

      //set variable for current animation sequence
      $scope.currentRestaurant.rated = bool;
      $scope.currentRestaurant.hide = true;

      //$timeout to allow animation to complete before changing to the next product
      $timeout(function() {
        //get index of random restaurant 
        var randomRestaurantIndex = Math.floor(Math.random() * ($scope.restaurants.length));

        //update current restaurant in scope
        $scope.currentRestaurant = angular.copy($scope.restaurants[randomRestaurantIndex]);

      }, 500);
    }

    /* Http Get Restaurants from API 
    function getRandomRestaurant() {
      //get restaurants from api then store into the array restaurants
      $http.get("http://107.170.255.42:3000/api/v1/restaurant").then(function(response) {
        $scope.restaurants = response.data;
      });

      //initialize the current restaurant
      $scope.currentRestaurant = angular.copy($scope.restaurants[0]);

       //fired when you random generate restaurant
      $scope.sendFeedback = function(bool) {

        //set variable for current animation sequence
        $scope.currentRestaurant.rated = bool;
        $scope.currentRestaurant.hide = true;

        //$timeout to allow animation to complete before changing to the next product
        $timeout(function() {
          //get index of random restaurant 
          var randomRestaurantIndex = Math.round(Math.random() * ($scope.restaurants.length - 1));

          //update current restaurant in scope
          $scope.currentRestaurant = angular.copy($scope.restaurants[randomRestaurantIndex]);

          }, 500);
        } 
      }
    }
    */
})

