/**
 * Created by thudoan on 12/3/14.
 */
(function(){
  var sportsStore=angular.module("sportsStore");

    sportsStore.controller("SportsStoreController",function(CategoriesService,ProductsService){
        this.categories=CategoriesService.query();
        this.products=ProductsService.query();

    });

    sportsStore.controller("ProductsListController",function($filter){
        var selectedCategory=null;

        this.selectCategory=function(cat){
            selectedCategory=cat;
        };

        this.categoryFilterFunction=function(product){
            return (selectedCategory==null || product.category==selectedCategory);
        };

    });
})();



