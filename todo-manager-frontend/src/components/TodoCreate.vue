<template>
    <div>
      <h1>Create a new todo</h1>
      <form @submit.prevent="createTodo">
        <input v-model="title" placeholder="Enter todo title" required>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      async createTodo() {
        await axios.post('http://localhost:3000/todos', { title: this.title })
        this.title = ''
        this.$router.push('/')
      }
    }
  }
  </script>
  