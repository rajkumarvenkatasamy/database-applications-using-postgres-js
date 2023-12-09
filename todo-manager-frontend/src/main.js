import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TodoList from './components/TodoList.vue'
import TodoCreate from './components/TodoCreate.vue'
import TodoUpdate from './components/TodoUpdate.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TodoList },
    { path: '/create', component: TodoCreate },
    { path: '/update/:id', component: TodoUpdate }
  ]
})

createApp(App).use(router).mount('#app')
