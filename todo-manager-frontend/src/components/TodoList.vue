<template>
    <div>
      <h1>Todo List</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
          <button @click="deleteTodo(todo.id)">Delete</button>
          <router-link :to="`/update/${todo.id}`">Update</router-link>
        </li>
      </ul>
      <router-link to="/create">Create a new todo</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        todos: []
      }
    },
    async created() {
      const response = await axios.get('http://localhost:3000/todos')
      this.todos = response.data
    },
    methods: {
      async deleteTodo(id) {
        await axios.delete(`http://localhost:3000/todos/${id}`)
        this.todos = this.todos.filter(todo => todo.id !== id)
      }
    }
  }
  </script>
  