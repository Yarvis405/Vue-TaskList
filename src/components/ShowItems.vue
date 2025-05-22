<script lang="ts">
  /*scripts here*/
  //import Manage from './Manage.vue'
  import { mapStores, mapState } from 'pinia'

  //custom
  import { useManageStore } from '@/stores/manage.ts'

  //=================================================================

  export default {
    name: "Show Items",
    props: [],
    components: {
    },

    //===============================================================

    data() {
      return {
        uAgent: navigator.userAgent,
        temp: <string> "",
        latest_task: <string> "",
        dump: <string> ""
      }
    },

    //===============================================================

    methods: {
      newTask(temp){
        this.latest_task = ""

        if((this.temp !== "" || !temp) && this.temp !== "dump"){
          useManageStore().newTask(temp)
          this.temp = "";
        } else if(this.temp === "dump") {
          this.latest_task = this.temp
          this.dump = useManageStore().dataDump()
          alert("dumps are not allowed but ...!")
          this.temp = ""
        }
      }
    },

    computed: {
      ...mapStores(useManageStore),
      ...mapState(useManageStore, ['title', 'index', 'tasks']) 
    },

    mounted() {
     for(key in this.tasks){
      console.log(tasks)
      this.localTasks[key] = this.tasks[key];
     }
    }


  }
</script>


<template>
  <article>
    <table> <!-- v-if="task.length != 0" -->
      <thead class="task">
        <th style="background: none; border: none"><h2>{{ title }}</h2></th>
        <!--<Manage />-->
      </thead>

      <tbody>
      <tr class="hero">
        <td><input type="text" maxlength="27" ref="taskIn" v-model="temp" placeholder="add new task" /></td>
        <td><input type="button" role="button" class="primary" @click="newTask(temp)" value="Add"/></td>
      </tr>

      <tr v-for="key in tasks" :key="key" v-show="key.isActive" :class="{isDone: key.isDone}">
        <td class="task" @click="manageStore.taskFlags({flag: 'isDone', taskID: key.id})" :class="{isDone: key.isDone}" >
          <span>{{ key.brief }}</span>
        </td> <!--onclick change isDone style overline-->
        <!--<label @click=""><h1>{{localTasks}}</h1></label>-->
        <td><input type="button" @click="manageStore.taskFlags({flag: 'isActive', taskID: key.id})" value="remove" /></td>
      </tr>
      </tbody>
    </table>
  </article>

  <article v-show="latest_task === 'dump' && !uAgent.includes('Mobile' || 'IOS' || 'Android' )" >
    <h3>History</h3>

    <div>
      {{dump
      .replace(/({)/g, "\n{")
      .replace(/(\[)/g, "")
      .replace(/]/g, "")}}
    </div>
  </article>
</template>


<style scoped>
  /*if need custom styles*/

  table tr .task {
    width: 80%
  }

  table tr td input[type="button"] {
    background: #cc0000cc;
  }

  .isDone{
    text-decoration: line-through;
    filter: opacity(60%);
  }

  .task {
    cursor: pointer;
    transition: .3s;
  }

  .task:hover {
    filter: opacity(80%);
  }

  .hero, .hero * {
    outline: none;
    background: none
  }

  .hero input[type="text"] {
    border: none;
    font-size: 1.2rem;
    border-bottom: solid .1rem white;
    transition: .3s
  }

  .hero input[type="text"]:hover {
    border-bottom: solid .12rem white;
  }

  .hero input[type="text"]:focus {
    box-shadow: none;
    outline: none;
  }
</style>
