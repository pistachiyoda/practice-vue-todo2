//Create a new Vue instance
let todo = new Vue({
  el: "#todo",
  data: {
    inputData: "",
    isDone: "",
    todoList: []
  },
  methods: {
    addTodo: function() {
      this.todoList.push({ text: this.inputData, isDone: false });
    },
    removeTodo: function(index) {
      this.todoList.splice(index, 1);
    },
    done: function(index) {
      this.todoList[index].isDone = !this.todoList[index].isDone;
    }
  },
  computed: {
    remaining: function() {
      return this.todoList.filter(todo => todo.isDone === false);
    }
  }
});
Vue.component("compo", {
  props: ["text", "index"],
  //テンプレートの中ではthisがいらない
  methods: {
    clickRemoveButton() {
      this.$emit("click-remove-button", this.index);
    },
    clickDoneButton() {
      this.$emit("click-done-button", this.index);
    }
  },
  template:
    '<li><input type="checkbox" @change="clickDoneButton"  class="checkbox" /><label for="checkbox"></label>{{ text }}<button v-on:click="clickRemoveButton" class="delete">X</button></li>'
});
