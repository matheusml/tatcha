app.controller('productsCtrl', function ($scope, $sce, productsService, filterProductsService){
	function init() {
  	$scope.page = 1;
  	$scope.limit = 3;
  }

  $scope.showDetails = function (product) {
  	
  };

  $scope.paginateProducts = function (page) {
  	$scope.page += page;
  	$scope.searchProducts = "";
  	getPaginatedProducts();
  }

  $scope.$watch('searchProducts', function(search) {
  	search ? getProductsByName(search) : getPaginatedProducts();
  });

  function getProductsByName(search) {
		$scope.busyLoading = true;
  	productsService
  		.getProducts()
     	.then(function(response){
     		$scope.products = filterProductsService.byName(response.data, search, $scope.limit);
				$scope.busyLoading = false;
   		});
  }

  function getPaginatedProducts() {
  	$scope.busyLoading = true;
  	productsService
	  	.getPaginatedProducts($scope.page, $scope.limit)
     	.then(function(response){
  	   	$scope.products = response.data;
  			$scope.busyLoading = false;
     	});
  }
    
   init();
});