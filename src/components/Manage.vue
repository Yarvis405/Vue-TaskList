<script lang="ts">
  import { ref } from 'vue'
  import { mapStores, mapState } from 'pinia'

  //custom
  import { useManageStore } from '@/stores/manage.ts'

/*
  if(useManageStore){
   const manageStore = useManageStore()
  } else {
    console.log("something went wrong")
  }*/

/*
  interface TaskTemplate {
    id: number,
    brief: string //content
    isDone: bool //if done than line-trought or .isDone(class)
    isActive: bool //show or hide the task
  }

*/

  //=================================================================
  
  export default {
    name: "Manage",
    props: [],
    components: {
      //components
    },

    data(): any{
      return {
        local_title: "My title",
        local_index: 0,
        local_tasks: ref<TaskTemplate[]>([]),
      }
    },

    //===============================================================

    methods: {

      test(){
        console.log(useManageStore)
      },
/*
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

      //---

      removeTask(taskID: number): string {
        //remove task
        delete this.tasks[taskID]
        return "success"
      },

      //---

      //isActive and isDone functions an be chaged to one function in that case flags
      taskFlags({taskID: number, flag: string}): string{
        
        const data = JSON.parse(this.tasks[taskID])

        data[flag] = !data[flag]

        this.tasks[taskID] = JSON.stringify(data)

        return `${flag} successfully updated`
      }*/

      //note JSON api is just to show readable data in console since vue returns an object itself
    },

    //===============================================================


    mounted(){
      window.store = useManageStore();
      window.tasks = this.tasks
    }

  }
</script>


<template>
  <!---->
  <td>
  <nav>
    <ul>
      <li><h3 @load="test">Your Tasks</h3></li>
    </ul>

    <ul>
      <!--<li><input type="button" @click="manageStore.removeTask(0)" value="Delete"/></li>-->
    </ul>
  </nav>
  </td>

  <!--<td><input type="button" @click="manageStore.newTask" value="Add"/></td>-->
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
