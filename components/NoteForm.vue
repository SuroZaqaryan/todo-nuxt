<template>
  <div class="max-w-lg mx-auto mt-6 bg-white rounded-md">
    <input v-model="note.title" placeholder="Enter title"
      class="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

    <ul>
      <li v-for="(todo, index) in note.todos" :key="index" class="flex items-center mb-2 space-x-2">
        <input type="checkbox" v-model="todo.done"
          class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
        <input v-model="todo.text" placeholder="Todo text"
          class="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button @click="removeTodo(index)"
          class="px-3 py-1 text-white bg-red-500 font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Remove
        </button>
      </li>
    </ul>

    <button v-if="note.title" @click="addTodo"
      class="w-full px-4 py-2 mt-4 text-white font-bold bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
      Add Todo
    </button>

    <div class="flex justify-between mt-3 space-x-2">
      <button @click="$emit('save', note)"
        class="flex-1 px-4 py-2 text-white bg-blue-500 font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Save
      </button>

      <button @click="$emit('cancel')"
        class="flex-1 px-4 py-2 text-white bg-gray-500 font-bold rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  note: {
    type: Object,
    default: () => ({ title: '', todos: [] })
  }
})

function addTodo() {
  props.note.todos.push({ text: '', done: false })
}

function removeTodo(index) {
  props.note.todos.splice(index, 1)
}
</script>
