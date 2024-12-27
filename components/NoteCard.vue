<template>
  <div class="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg  mb-6 py-5 px-4">
    <div>
      <h3 class="text-zinc-800 font-bold mb-5 text-lg truncate">{{ note.title }}</h3>
      <ul class="mb-3">
        <li v-for="(todo, index) in note.todos.slice(0, 4)" :key="index"
          class="text-base flex items-center font-bold text-zinc-700">
          <img v-if="todo.done" src="~/assets/icons/check.svg" class="mr-2" alt="done" />
          <img v-else src="~/assets/icons/close.svg" class="mr-2" alt="close" />
          {{ todo.text }}
        </li>
        <li v-if="note.todos.length > 4" class="text-sm italic text-gray-500">...and more</li>
      </ul>
    </div>
    <div class="flex items-center justify-end gap-1.5">
      <button @click="$emit('edit', note.id)"
        class="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
        <img src="~/assets/icons/edit.svg" alt="edit" />
      </button>

      <button @click="$emit('delete', note.id)"
        class="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
        <img src="~/assets/icons/trash.svg" alt="edit" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['note'])
</script>
