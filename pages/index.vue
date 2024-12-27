<template>
  <div class="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-md">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Notes ✍🏼</h1>

    <div class="flex justify-end mb-4">
      <button @click="goToNewNote"
        class="px-4 py-2 text-white bg-blue-500 font-bold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Create New Note
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note" @edit="editNote" @delete="deleteNote" class="shadow-md rounded p-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNoteStore } from '~/store/notes.js'
import NoteCard from '~/components/NoteCard.vue'

const noteStore = useNoteStore()

onMounted(() => noteStore.loadNotes());

function goToNewNote() {
  navigateTo('/note/new')
}

function editNote(id) {
  navigateTo(`/note/${id}`)
}

function deleteNote(id) {
  if (confirm('Are you sure you want to delete this note?')) {
    noteStore.deleteNote(id)
  }
}
</script>