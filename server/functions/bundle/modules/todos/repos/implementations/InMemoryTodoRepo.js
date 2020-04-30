"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryTodoRepo {
    constructor() {
        this.todos = [
            { id: 1, text: "Getting started", completed: false },
            { id: 2, text: "Second todo", completed: false },
            { id: 3, text: "Third todo", completed: false },
        ];
        this.lastTodoId = this.todos.length;
    }
    async addTodo(text) {
        if (text.length < 3)
            throw new Error("Todo needs to be longer than 3 characters.");
        this.lastTodoId++;
        this.todos.push({ id: this.lastTodoId, text, completed: false });
        console.log('New todo list', this.todos);
    }
    async completeTodo(id) {
        this.todos = this.todos.map((t) => t.id === id ? Object.assign(Object.assign({}, t), { completed: true }) : t);
    }
    async clearCompletedTodos() {
        this.todos = this.todos
            .filter((t) => t.completed !== true);
    }
    async deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    async editTodo(id, text) {
        if (text.length < 3)
            throw new Error("Todo needs to be longer than 3 characters.");
        const found = this.todos.findIndex((t) => t.id === id);
        if (found === -1) {
            throw new Error("Todo not found for editing");
        }
        this.todos[found].text = text;
    }
    async getAllTodos() {
        return this.todos;
    }
    async getTodoById(id) {
        const found = this.todos.findIndex((t) => t.id === id);
        if (found === -1) {
            throw new Error("Todo not found");
        }
        return this.todos[found];
    }
    async getLastTodo() {
        return this.todos[this.todos.length - 1];
    }
    async completeAllTodos() {
        this.todos = this.todos.map((t) => (Object.assign(Object.assign({}, t), { completed: true })));
    }
}
exports.InMemoryTodoRepo = InMemoryTodoRepo;
//# sourceMappingURL=InMemoryTodoRepo.js.map