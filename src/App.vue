<script setup lang="ts">
//VUE 
import { ref } from 'vue'
//local
import NewTask from './components/NewTask.vue'
//import RemoveTask './components/RemoveTask.vue'
//import Completed './components/Completed.vue'
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><h1>TaskList</h1></li>
      </ul>
    </nav>
  </header>

  <main>
    <NewTask />
  </main>

  <footer>
    <nav>
      <ul>
        <li><h2>TaskList</h2></li>
      </ul>

      <ul>
        <li><a href="https://github.com/yarvis405" target="_blank">Yarvis405</a></li>
        <li><a href="https://github.com/demokratia481" target="_blank">demokratia481</a></li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
