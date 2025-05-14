<script lang="ts">
  import { ref } from 'vue'

  interface TaskTemplate {
    id: number,
    brief: string //content
    isDone: bool //if done than line-trought or .isDone(class)
    isActive: bool //show or hide the task
  }
  
  export default {
    name: "Manage",
    props: [],
    components: {
      //components here
    },

    data(): any{
      return {
        title: "My title",
        index: 0,
        tasks: ref<TaskTemplate[]>([]),
      }
    },

    methods: {

      newTask(): any{
        for(let key in this.tasks){
          console.log(key, JSON.parse(this.tasks[key]))
        }
        console.log(`index ${this.index}`)
        //create task
        this.tasks.push(JSON.stringify({
          id: this.index,
          brief: "my new Task",
          isDone: false,
          isActive: true
        }))

        this.index++;
      },

      removeTask(taskID): string {
        //remove task
        delete tasks[taskID]
        return "success"
      }
    },

    computed: {
      updateTasks(){
        console.log(this.tasks)
        return this.tasks
      }
    },

  }
</script>

<template>
  <!---->
  <nav>
    <ul>
      <li><h3>Your Tasks</h3></li>
    </ul>

    <ul>
      <li><input type="button" @click="newTask" value="New Task"/></li>
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
