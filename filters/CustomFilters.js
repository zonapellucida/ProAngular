/**
 * Created by thudoan on 12/5/14.
 */

var filterApp=angular.module("customFilter",[]);

(
    function(){
        filterApp.filter("categoryFilter",function(){
            return(
              function(products,prodName){
                  var temp={};
                  var retVal=[];

                  if(angular.isArray(products) && products.length>0 && angular.isString(prodName)){
                      angular.forEach(products,function(aProd){
                          var prodCat=aProd[prodName];
                          if(!(prodCat in temp)){
                              temp[prodCat]=prodCat;
                              retVal.push(aProd);
                          }
                      })
                  }
                  return retVal;
              }
            );
        });
    }
)();