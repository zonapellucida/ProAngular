/**
 * Created by thudoan on 12/5/14.
 */

(
    function(){
        var sportsStore=angular.module("sportsStore");

        sportsStore.factory("CategoriesService",function($resource){
            return $resource("common/js/sportsStoreCategories.json");
        });

        sportsStore.factory("ProductsService",function($resource){
            return $resource("common/js/sportsStoreProducts.json");
        });
    }

)();