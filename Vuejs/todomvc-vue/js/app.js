;(function(){
    var todos = [
        {
            id:1,
            title:'抽烟',
            completed:true
        },{
            id:2,
            title:'喝酒',
            completed:false
        },{
            id:3,
            title:'烫头',
            completed:false
        }
    ];
    var app = new Vue({
        el:'#app',
        data:{
            todos:todos,
            currentEditing:null

        },
        methods:{
            /**新增todo*/
            handleNewTodoKeyDown:function(e){
                var todos = this.todos;
                var id = todos[todos.length-1]?todos[todos.length-1].id+1:1;
                var target = e.target;
                var value = target.value;
                var todo = {
                    id:id,
                    title:value,
                    completed:false
                }
                this.todos.push(todo);
                target.value = '';
            },
            /**切换全选与全不选*/
            handleToggleAllClick:function(e){
                var checked = e.target.checked;
                this.todos.forEach(function(item){
                    item.completed=checked;
                });
            },
            /**删除todo*/
            handleRemoveTodoClick:function(index){
                this.todos.splice(index,1);
            },
            /**获得编辑状态*/
            handleGetEditingDblClick:function(todo){
                this.currentEditing = todo;
            },
            /**编辑任务，敲回车或失去焦点保存编辑*/
            handleSaveTodo:function(todo,index,e){
                var value = e.target.value;
                /**数据被编辑为空，则直接删除*/
//					if(value.trim()==''){
                if(!value.length){
                    return this.todos.splice(index,1);
                }
                todo.title = value;
                this.currentEditing = null;
            },
            handleCancelEditEsc:function(){
                /**去除编辑样式*/
                this.currentEditing = null;
            },
            handleClearCompletedClick:function(){
                /**不要在forEach循环遍历中删除数组元素，会导致索引错乱*/
                for(var i = 0; i < this.todos.length; i++){
                    if(this.todos[i].completed){
                        this.todos.splice(i,1);
                        i--;
                    }
                }
                /**也可以使用过滤方法*/
//					this.todos = this.todos.filter(item => !item.completed );

            },


            remainingCount:function(){
                return this.todos.filter(function(todo){
                    return !todo.completed;
                }).length;
            }
        }
    });
})();