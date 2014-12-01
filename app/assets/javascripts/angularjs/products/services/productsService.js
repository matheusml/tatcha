app.service('productsService', ['$http', function ($http){
    this.getPaginatedProducts = function(page, limit) {
    		return $http.get('http://api.tatcha.com/shop/api/rest/products?page='+page+'&limit='+limit);
    };

    this.getProducts = function() {
    		return $http.get('http://api.tatcha.com/shop/api/rest/products');
    };
}]);