const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '', // Holds new task input
            todos: []    // List of tasks
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = ''; // Clear the input after adding
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1); // Remove task at specified index
        }
    }
}).mount('#app');

