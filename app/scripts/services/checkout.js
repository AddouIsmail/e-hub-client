'use strict';

angular.module('eHubClientApp').service('CheckoutService', function ($cookies,basketProvider) {
	this.clearFromBasket=function(product){
		return basketProvider.clearFromBasket(product);
	}
});