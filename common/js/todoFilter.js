/**
 * Created by thudoan on 12/3/14.
 */

todoApp.filter("doneFilter",function(){
    return (
        function(items,showDone){
            var retVal=[];
            angular.forEach(items,function(item){
                if(!item.done || showDone){
                    retVal.push(item);
                }
            });
            return retVal;
        }
    );
});

