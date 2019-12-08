let todo = new Vue({
  el: "#todo",
  data: {
    currentId: 0,
    inputTask: "",
    inputName: "",
    inputDate: "",
    isDone: "",
    selectedName: "すべて",
    selectedStatus: "すべて",
    todoList: [],
    nameList: [],
    statusList: ["TODO", "IN PROGRESS", "DONE"]
  },
  methods: {
    addTodo: function() {
      this.currentId++,
        this.todoList.push({
          id: this.currentId,
          task: this.inputTask,
          name: this.inputName,
          date: this.inputDate,
          status: "TODO"
        });
      let val = this.nameList.filter(name => name === this.inputName);
      if (val.length === 0) {
        this.nameList.push(this.inputName);
      }
    },
    removeTodo: function(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    done: function(index) {
      this.todoList[index].isDone = !this.todoList[index].isDone;
    },
    removeDoneTodo: function() {
      const doneTodoConfirmation = confirm(
        "ステータスが”DONE”のタスクを一括削除します"
      );
      if (doneTodoConfirmation) {
        this.todoList = this.todoList.filter(todo => todo.status !== "DONE");
      }
    }
  },
  computed: {
    totalTask: function() {
      return this.todoList;
    },
    remaining: function() {
      return this.todoList.filter(todo => todo.status !== "DONE");
    },
    selectedRemaining: function(selectedName) {
      return (
        this.todoList
          // .filter(todo => todo.isDone === false)
          .filter(todo => todo.name === "test")
      );
    }
  }
});
