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
    title: <string>"TaskList",
    index: <number>0,
    tasks: <any[]>[], //first define array type <type[]> then define array [] --> <string[]>[]
    dump: <string>""
  }),

  //===============================================================
  //getters
  getters: {

  },

  //===============================================================

  actions: {
    newTask(taskContent: string): any {
      console.log(`index ${this.index}`)

      const data: TaskTemplate = {
        id: this.index,
        brief: taskContent || "my new Task",
        isDone: false,
        isActive: true
      }

      //const jsonObj = JSON.stringify(data)

      //create task
      this.tasks[this.index] = data

      this.index++;

      //debug
      for (let key in this.tasks) {
        console.log(key, this.tasks[key])
      }
    },

    //---

    removeTask(taskID: number): any {
      //remove task

      if (taskID) {
        //delete this.tasks[taskID]
        this.tasks[taskID] = '';
      } else if (taskID == -1) {
        this.tasks = []
        return this.tasks;
      } else {
        return "something went wrong"
      }


      for (let key in this.tasks) {
        console.log(key, this.tasks[key])
      }

      return "success"
    },

    //---

    dataDump(): string {
      return JSON.stringify(this.tasks)
    },

    //---

    //isActive and isDone functions an be chaged to one function in that case flags
    taskFlags(props: Flags): string {

      console.log(props.taskID)

      const data: any = this.tasks[props.taskID]

      data[props.flag] = !data[props.flag]

      //this.tasks[props.taskID] = JSON.stringify(data)

      return `${props.flag} successfully updated`
    }

    //note JSON api is just to show readable data in console since vue returns an object itself
  },

})
