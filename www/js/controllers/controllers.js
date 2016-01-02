app.controller('RestaurantCtrl', function($scope, $timeout, $http) {

	$scope.restaurants = [ //this will eventually become the empty array where GET request will store the restaurants into.
      {
        "name": "Delicious Pho",
        "budget": "$10",
        "phone": "604-512-0433",
        "address": "4049 Cherry Lane Charleston, SC 29406",
        "img": "img/delicious.jpg",
        "cuisine": "Vietnamese",
        "rating": "5" 
      },
      {
        "name": "Jinya Ramen",
        "budget": "$12",
        "phone": "604-346-1235",
        "address": "265 School Street Sebastian, FL 32958",
        "img": "img/jinya.jpg",
        "cuisine": "Japanese",
        "rating": "10" 
      },
      {
        "name": "Italian Kitchen",
        "budget": "$15",
        "phone": "604-324-8709",
        "address": "6462 Marshall Street Youngstown, OH 44512",
        "img": "img/italian.jpg",
        "cuisine": "Italian",
        "rating": "9" 
      },
      {
        "name": "Chipotle",
        "budget": "$9",
        "phone": "604-902-4182",
        "address": "5464 Lincoln Avenue Fairfax, VA 22030",
        "img": "img/chipotle.png",
        "cuisine": "Mexican",
        "rating": "7" 
      },
      {
        "name": "Blue Water Cafe",
        "budget": "$30",
        "phone": "604-321-5234",
        "address": "3700 Depot Street Oxnard, CA 93035",
        "img": "img/blue.jpg",
        "cuisine": "Western",
        "rating": "10" 
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
        var randomRestaurantIndex = Math.round(Math.random() * ($scope.restaurants.length - 1));

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

