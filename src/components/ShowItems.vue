<script lang="ts">
  /*scripts here*/
  import Manage from './Manage.vue'

  export default {
    name: "Show Items",
    props: [],
    components: {
      Manage
    }


  }
</script>

<template>
  <article>
    <table> <!-- v-if="task.length != 0" -->
      <tr>
        <Manage />
      </tr>

      <tr> <!-- v-for="key in Manage.task" :bind:id="key"-->
        <td class="task"><!--v-effect="if (task[key].isDone") $el.className+=" isdone"--> <!--{{ task[key].brief}}-->My task</td> <!--onclick change isDone style overline-->
        <td><!--{{ task[key].isDOne}}--><input type="button" value="remove" /></td>
      </tr>
    </table>
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

  .isDone {
    text-decoration: line-through;
  }
</style>
