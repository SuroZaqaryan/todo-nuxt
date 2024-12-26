<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <input v-model="todo.text" />
      <button @click="removeTodo(todo.id)">Удалить</button>
    </div>
    <button @click="addTodo">Добавить задачу</button>
  </div>
</template>

<script>
export default {
  props: ['todos'],
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        const newTodoItem = {
          id: Date.now(),
          text: this.newTodo,
          completed: false,
        };
        this.todos.push(newTodoItem);
        this.newTodo = '';
      }
    },
    removeTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) this.todos.splice(index, 1);
    },
  },
};
</script>
