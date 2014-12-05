/**
 * Created by thudoan on 12/3/14.
 */

todoApp.controller("TodoController",function(){
    this.newTodoAction="";
    this.todos=todosFromService;

    this.addTodo=function(){
        if(this.newTodoAction.trim()!==""){
            var aNewTodo= new Object();
            aNewTodo.action=this.newTodoAction;
            aNewTodo.done=false;
            this.todos.items.push(aNewTodo);
        }
    };
});
