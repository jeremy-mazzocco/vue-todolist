const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            displayCross: 'xmark-none',
            doneLabel: '',
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

        },

        rimuoviTask(indice) {
            this.tasks.splice(indice, 1)
        },

        barraTask(indice) {
            if (this.tasks[indice].done === false) {
                this.doneLabel = 'line-erase';
                this.tasks[indice].done = true;
                console.log(this.doneLabel);
            } else if (this.tasks[indice].done === true) {
                this.doneLabel = '';
                this.tasks[indice].done = false
                console.log(this.doneLabel);
            }

        }

    }
}).mount('#app')

