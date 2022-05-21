        class Todo {
            constructor(item,finished){
                this.item = item;
                this.finished = finished;
            }
            changeState() {
                this.finished = !this.finished
                //! 부정연산자 => 상태를 바꿔줌 트루면 펄스로 펄스면 트루로
            }
        }

        class TodoManager {
            constructor(){
                this.todoList = [];
            }
            addItem(item, finished=false){
                const todo = new Todo(item, finished);
                this.todoList.push(todo);
                //투두와 투두매니저가 상호작용하는 것은 여기까지 ! 
            }
            getItems(){
                return this.todoList;
            }
            getLeftTodoCount(){
                this.todoList.reduce((total,current)=>{
                    if(current.finished === false){
                        return ++total;
                    } else {
                        return total;
                    }
                },0
                );
            }
        }

        const todoManager = new TodoManager();
