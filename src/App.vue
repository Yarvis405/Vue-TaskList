<script lang="ts">
  //VUE 
  import { ref } from 'vue'
  import { mapStores, mapState} from 'pinia'
  //local
  //import Manage from './components/Manage.vue'
  import ShowItems from './components/ShowItems.vue'
  import { useManageStore } from './stores/manage.ts'

  export default {
    name: "app",
    components: {
      //Manage,
      ShowItems
    },

    data() {
      return {
        local_title: "TaskList",
        local_theme: false,
        collaborators: [
          {
            user: "yarvis405",
            github: "https://github.com/yarvis405"
          },

          {
            user: "demokratia481",
            github: "https://github.com/demokratia481"
          },

          {
            user: "DengnisR",
            github: "https://github.com/DengnisR"
          }
        ]
      }
    },

    computed: {
      ...mapStores(useManageStore),
      ...mapState(useManageStore, ['title', 'index', 'tasks'])
    },

    methods: {
      changeTheme(){
        console.log(useManageStore)
        
        this.isDark = !this.isDark
        const sections = ['header', 'main', 'footer']

        if(this.isDark){
          console.debug("dark")
          sections.map(section => {
            this.$refs[section].theme = 'dark'
          })
          return "dark"
        } else {
          console.log("light")
          sections.map(section => {
            this.$refs[section].theme = 'dark'
          })
          return "light"
        }
      },
    },
  }


</script>

<template>
  <header ref="header">
    <nav>
      <ul>
        <li><h1>{{ title }}</h1></li>
      </ul>

      <ul>
        <li>
          <input type="button" @click="changeTheme" value="theme" />
        </li>
      </ul>
    </nav>
  </header>

  <main ref="main">
    <section class="container">
      <ShowItems />
    </section>
  </main>

  <footer ref="footer">
    <nav>
      <ul>
        <li><h2>{{ title }}</h2></li>
      </ul>

      <ul>
        <li v-for="collaborator in collaborators" >
          <a :bind:href="collaborator.github" target="_blank">{{collaborator.user}}</a>
        </li>
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
  flex-direction: column;
  justify-content: space-around;
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

  section, div {
    width: 100%;
  }
}

</style>
