/**
 * Created by thudoan on 12/3/14.
 */
var todoApp=angular.module("todoApp",[]);

var  todosFromService={user:"Noah"};

todoApp.run(function($http){
    $http.get("common/js/todos.json").
        success(function(data){
            todosFromService.items=data;
        }).
        error(function(status){

        });
});
