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
**Manage** -> crea, elimina, actualiza las tareas;
**ShowItems** -> se encraga the mostrar las tareas; (podria contener una function init para inicializar ciertas variables o db -> si se decide anadir)

### Manage
  - variables [tasks, index] <!--those are what i remember by the time im writting this-->
    * [tasks] -> cada nueva tarea creada es anadido a este array
    * [index] -> index anade una unidad por cada tarea creada es igual a el id de la tarea y su indice en el array
  - methods [newTask, removeTask, tasksFlags]
    * [newTask] -> crea nuevas tareas. Proceso [obj -> JSONStr -> push]
    * [removeTask] -> elimina la tarea seleccionada. Proceso [delete]
    * [tasksFlags] -> actualiza las variables(q son boolean) isDone/isActive. Proceso [obj -> JSObj -> update -> JSONStr -> push]


## TODO LIST

- [ ] Crear Interfaz de Usuario **si alguien puede ayudar con eso bienbenido sea**
  * [x] header
  * [x] footer
  * [x] section de contenidos
  * [ ] ventana de tareas
    - [ ] thead/header
    - [x] tareas
- [x] adminstrar tareas
  * [ ] crear tareas
    - [x] anadir tarea
    - [ ] recibir entradas del usuario
  * [x] eliminar tareas
  * [ ] actualizar tareas
    - [x] activo
    - [x] completado
    - [ ] contenido
- [ ] mostrar tareas
  * [ ] obtener las tareas
  * [ ] mostrar cada tarea

**Nota: Es possible q alguien me responda esta pregunta? Cuando usar cada una?**
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

*sigo sin estar seguro de como functiona del todo. Y tampoco tengo idea de como importar y exportar variables o methodos.*

[**note**] -> *logre resolver como crear cada componente y sus partes con algo de ayuda. Pero sigo sin tener idea de como compartir, variables methods etc. entre componentes.*

## metadata
- [Name:] TaskList
- [Started:] 2025-05-13 20:33
- **collaborators**
  * [demokratia481](https://github.com/demokratia481)
  * [DengnisR](https://github.com/DengnisR)
- [Dead_end:] 2025-05-30 00:00
