import { defineStore } from "pinia"

//===============================================================

//interfaces
interface TaskTemplate {
  id: number,
  brief: string //content
  isDone: boolean //if done than line-trought or .isDone(class)
  isActive: boolean //show or hide the task
}

interface Flags {
  taskID: number,
  flag: string
}


//===============================================================

export const useManageStore = defineStore("manage", {

  state: () => ({
    title: <string>"My title",
    index: <number>0,
    tasks: <string[]>[], //first define array type <type[]> then define array [] --> <string[]>[]
  }),

  //===============================================================
  //getters
  getters: {

  },

  //===============================================================

  actions: {
    newTask(): any {
      for (let key in this.tasks) {
        console.log(key, JSON.parse(this.tasks[key]))
      }
      console.log(`index ${this.index}`)

      const data: TaskTemplate = {
        id: this.index,
        brief: "my new Task",
        isDone: false,
        isActive: true
      }

      const jsonObj = JSON.stringify(data)

      //create task
      this.tasks.push(jsonObj)

      this.index++;
    },

    //---

    removeTask(taskID: number): string {
      //remove task
      delete this.tasks[taskID]
      return "success"
    },

    //---

    updateTask(taskID: number) {
      console.log(taskID)
    },

    //---

    //isActive and isDone functions an be chaged to one function in that case flags
    taskFlags(props: Flags): string {

      const data = JSON.parse(this.tasks[props.taskID])

      data[props.flag] = !data[props.flag]

      this.tasks[props.taskID] = JSON.stringify(data)

      return `${props.flag} successfully updated`
    }

    //note JSON api is just to show readable data in console since vue returns an object itself
  },

})
