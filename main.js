const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [

            ],
        }
    },
    methods: {
        aggiungiTask() {
            this.tasks.push({
                text: this.newTask,
                done: false,
            });
            console.log(this.newTask);
        }


    }
}).mount('#app')

