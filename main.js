const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            displayCross: 'xmark-none',
        }
    },
    methods: {
        aggiungiTask() {
            this.tasks.push(
                {
                    text: this.newTask,
                    done: false,
                }
            );
            this.displayCross = 'xmark-show';
            this.newTask = '';
        },

        rimuoviTask(indice) {
            this.tasks.splice(indice, 1)
        },

        barraTask(indice) {
            if (this.tasks[indice].done === false) {
                this.tasks[indice].done = true;

            } else {
                this.tasks[indice].done = false
            }
        }
    }
}).mount('#app')

