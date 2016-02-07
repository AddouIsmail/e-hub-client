'use strict';
angular.module('eHubClientApp')
.factory('Product', function ($resource) {
        return $resource('http://127.0.0.1:8080/product/:id');
});

angular.module('eHubClientApp').service('basketProvider', function ($cookies) {
    
    this.getBasketItems = function () {
        var Basket =[];
        Basket=$cookies.getObject('basket');
        return Basket;
    }

    this.add = function (item) {
        var Basket =[];
        Basket=$cookies.getObject('basket');
        if(Basket!=null){
            Basket.push(item);
        }
        else{
            Basket=[];
            Basket.push(item);       
        }
        $cookies.putObject('basket',Basket);
        Basket=$cookies.getObject('basket');
        return Basket;
    }

    this.clearBasket=function(){
        $cookies.remove('basket')     ;
        return this.getBasketItems();
    }
    
    

    this.computeSum=function(){
        var Basket=this.getBasketItems();
        var sum=0;
        if(Basket!=null)
        for (var i = Basket.length - 1; i >= 0; i--) {
            sum+=parseFloat(Basket[i].price)*parseInt(Basket[i].quantity);
        };
        return sum;
    }

    this.BasketSize=function(){
        var Basket=this.getBasketItems();
        if (Basket==null)
            return 0;
        else
        return Basket.length;
    }
 });


