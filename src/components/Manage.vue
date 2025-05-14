<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string, tasks: array }>()

const count = ref(0)

/*
  methods: {
    newTask(): any{
      //create task
      return {brief: "my task", isDone: false}
    },

    removeTask(): string {
      //remove task
      return "success"
    }
  },

}
*/
</script>

<template style="width: 100%;">
  <!---->
  <nav>
    <ul>
      <li><h3>Your Tasks</h3></li>
    </ul>

    <ul>
      <li><input type="button" value="New Task"/></li>
    </ul>
  </nav>
  <!---->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<!----
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
!---->
