<script setup lang="ts">
//VUE 
import { ref } from 'vue'
//local
import Manage from './components/Manage.vue'
import ShowItems from './components/ShowItems.vue'
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
    <section class="container">
      <ShowItems />
    </section>
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

main {
  display: flex;
}

main section {
  display: flex;
  justify-content: center;
  align-items: center
}

main section article {
  flex: 1;
}

@media only screen and (max-width: 900px){
  footer nav, header nav {
    flex-wrap: wrap;
    justify-content: space-around;

  }
}

</style>
