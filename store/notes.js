import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: []
  }),

  actions: {
    loadNotes() {
      if (process.client) {
        const savedNotes = localStorage.getItem('notes')
        if (savedNotes) {
          this.notes = JSON.parse(savedNotes)
        }
      }
    },

    addNote(note) {
      this.notes.push(note)
      this.syncStorage()
    },

    updateNote(id, updatedNote) {
      const index = this.notes.findIndex(note => note.id === id)
      if (index !== -1) this.notes[index] = updatedNote
      this.syncStorage()
    },

    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
      this.syncStorage()
    },

    syncStorage() {
      if (process.client) {
        localStorage.setItem('notes', JSON.stringify(this.notes))
      }
    }
  }
})
