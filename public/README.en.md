# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# TaskList

## techs
  - VUEJS
  - TypeScript
  - picocss
  - no testing script(feel free to add)

## components
**Manage** -> create, removes, updates the task;
**ShowItems** -> print items to html user; (it might start with an init function as welll)

### Manage
  - variables [tasks, index] <!--those are what i remember by the time im writting this-->
    * [tasks] -> contain each new task created
    * [index] -> it adds up for each task created id both the id and the task index
  - methods [newTask, removeTask, tasksFlags]
    * [newTask] -> create new tasks. Process [obj -> JSONStr -> push]
    * [removeTask] -> remove a task. Process [delete]
    * [tasksFlags] -> updates task flags such as isDone/isActive. Process [obj -> JSObj -> update -> JSONStr -> push]


## TODO LIST

- [ ] User Interface **si alguien puede ayudar con eso bienbenido sea**
  * [x] header
  * [x] footer
  * [x] content section
  * [ ] TaskList window
    - [ ] thead/header
    - [x] Tasks
- [x] task manager
  * [ ] create task
    - [x] add new task
    - [ ] get user input
  * [x] remove tasks
  * [ ] update tasks
    - [x] active
    - [x] Done
    - [ ] content/brief
- [ ] show tasks
  * [ ] fetch tasks
  * [ ] show each task

**Note: if possible answer this do i use the default**
```html
<script setup lang="ts">
</script>

//OR

<script>
  export default {
    data: {},

    methods: {}
  }
</script>

```

*still not sure how it works. Also the export of methods and Props*

[**note**] -> *figured out how to work with methods, data, and props. still not sure how to share variables or methods between components*
