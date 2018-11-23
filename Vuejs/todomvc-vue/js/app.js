;(function(){
    /*var todos = [
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
    ];*/
    window.app = new Vue({
        el:'#app',
        data:{
            todos:JSON.parse(window.localStorage.getItem('todos')||'[]'),
            currentEditing:null,
            filterText:'all'

        },
		/**局部的自定义指令*/
		directives:{
			focus:{
				inserted:function(el){
					el.focus();
				}
			}
		},
        methods:{
            /**新增todo*/
            handleNewTodoKeyDown:function(e){
                var target = e.target;
                var value = target.value;
                if(!value.trim().length){
                    return;
                }
                var todos = this.todos;
                var id = todos[todos.length-1]?todos[todos.length-1].id+1:1;
                var todo = {
                    id:id,
                    title:value,
                    completed:false
                };
                this.todos.push(todo);
                target.value = '';
            },
            /**切换全选与全不选*/
            /*handleToggleAllClick:function(e){
                var checked = e.target.checked;
                this.todos.forEach(function(item){
                    item.completed=checked;
                });
            },*/
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
            }
        },
        computed:{
            /**
             * 在模板中放入太多的逻辑会让模板过重且难以维护。
             * 使用计算属性：
             *      1.使用方法可以把这种复杂逻辑封装起来
             *          每使用一次就调用一次，重复适应效率不高。
             *      2.使用计算属性
             *          1.不让模板逻辑太重
             *          2.解决性能问题
             * */
             //该成员就是一个方法，但是在使用的时候当成一个属性来使用。
            remainingCount:{
                get:function(){
                    return this.todos.filter(function(todo){
                        return !todo.completed;
                    }).length;
                }
            },
            toggleAllState:{
                /**取值*/
                get:function(){
                    /**
                     * 表示所有的todo都为true，多选框才为true
                     *
                     * 计算属性知道它依赖了todos
                     * 当todos发生变化，计算属性会重新计算
                     * */
                    return this.todos.every(function(todo){
                        return todo.completed;
                    });
                },
                /**赋值*/
                set:function(){
                    /**
                     *
                     * 表单控件checkbox双向绑定了toggleAllState，
                     * 所以checkbox的变化会调用set()方法，
                     * 在set方法中我们要做的是：
                     *  1.得到当前checkbox的选中状态
                     *  2.把所有的todo的任务项都设置为toggle-all的选中状态
                     * */
                    /**在自己的set方法中访问自己就是调用自己的get方法*/
                    //获得多选框切换后的状态
                    // true ==> false
                    // false ==> true
                    var checked = !this.toggleAllState;
                    this.todos.forEach(function(item){
                        item.completed=checked;
                    });

                }
            },
            filterTodos:function(){
                var text = this.filterText;
                switch (text){
                    case 'active':
                        return this.todos.filter(function(todo){
                            return !todo.completed;
                        });
                    break;
                    case 'completed':
                        return this.todos.filter(function(todo){
                            return todo.completed;
                        });
                        break;
                    default:
                        return this.todos;
                        break;
                }
            }
        },
        watch:{
            /**
             * 监视todos的改变，当todos发生变化的时候做业务定制处理。
             * 引用类型只能监视一层，无法监视内部成员的子成员的改变、
             * */
            todos:{
                /**
                 * 当监视到todos改变的时候会自动调用handler方法、
                 * */
                deep:true,//进行深度监视
                //immediate:true,//无论变化与否，初始化立即就会加载一起。
                handler:function(newValue,oldValue){
                    var objStr = JSON.stringify(newValue);
                    /**监视到todos变化，把todos存储到本地*/
                    window.localStorage.setItem('todos',objStr);
                }
            }
        }
    });


    window.onhashchange=handleFilterTodos;

    function handleFilterTodos(){
        app.filterText = window.location.hash.substring(2);
    }
    window.onhashchange();


})();