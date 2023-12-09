<template>
    <div>
      <h1>Update Todo</h1>
      <form @submit.prevent="updateTodo">
        <input v-model="title" placeholder="Enter new todo title" required>
        <button type="submit">Update</button>
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
    async created() {
      const response = await axios.get(`http://localhost:3000/todos/${this.$route.params.id}`)
      this.title = response.data[0].title
    },
    methods: {
      async updateTodo() {
        await axios.put(`http://localhost:3000/todos/${this.$route.params.id}`, { title: this.title })
        this.$router.push('/')
      }
    }
  }
  </script>
  