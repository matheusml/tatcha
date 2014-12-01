app.service('filterProductsService', function (){
    this.byName = function(products, search, limit) {
   		return filterProducts(products, search, limit);
    };

    function filterProducts(products, search, limit) {
    	var filteredProducts = [];
    	var countLimit = 0;

    	angular.forEach(products, function (product) { 
  			if (product.name.toLowerCase().indexOf(search.toLowerCase()) > -1 && countLimit < limit) {
  				filteredProducts.push(product);
  				countLimit++;
  			}
  		});
  		
  		return filteredProducts;
    }
});