const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            done: false,
            classLabel: ''
        }
    },
    methods: {
        aggiungiTask() {
            this.tasks.push(
                {
                    text: this.newTask,
                }
            );

            if (this.done === true) {
                this.classLabel = 'label';
            }

        }
    }
}).mount('#app')

