app.controller('RestaurantCtrl', function($scope, $timeout) {
	$scope.restaurants = [
      {
        "name": "Delicious Pho",
        "budget": "$10",
        "phone": "604-512-0433",
        "address": "4049 Cherry Lane Charleston, SC 29406",
        "img": "https://www.producthunt.com/r/0109266759e0f0/40894?app_id=1948",
        "cuisine": "American",
        "rating": "5" 
      },
      {
        "name": "Jinya Ramen",
        "budget": "$12",
        "phone": "604-346-1235",
        "address": "265 School Street Sebastian, FL 32958",
        "img": "http://www.adweek.com/files/imagecache/node-detail/news_article/bk.jpg",
        "cuisine": "American",
        "rating": "10" 
      },
      {
        "name": "Hapa Izakaya",
        "budget": "$15",
        "phone": "604-324-8709",
        "address": "6462 Marshall Street Youngstown, OH 44512",
        "img": "http://p.fod4.com/p/media/dd5164b1c6/tSTM3x1OQMuusG4nrbi3_mcdonalds-logo.jpg",
        "cuisine": "American",
        "rating": "9" 
      },
      {
        "name": "Chipotle",
        "budget": "$9",
        "phone": "604-902-4182",
        "address": "5464 Lincoln Avenue Fairfax, VA 22030",
        "img": "http://www.hercampus.com/sites/default/files/2015/07/23/chipotle-giftcard.png",
        "cuisine": "American",
        "rating": "7" 
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

      }, 250);
    }
})

