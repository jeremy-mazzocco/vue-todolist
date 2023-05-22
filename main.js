const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            done: false,
            doneLabel: '',
            displayToggle: 'xmark-none'
        }
    },
    methods: {
        aggiungiTask() {
            this.tasks.push(
                {
                    text: this.newTask,
                }
            );

            this.displayToggle = 'xmark-show';

            if (this.done === true) {
                this.doneLabel = 'label';
            }

        },

        rimuoviTask(indice) {
            this.tasks.splice(indice, 1)
        }
    }
}).mount('#app')

