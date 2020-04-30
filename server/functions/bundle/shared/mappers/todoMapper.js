"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoMapper {
    static toEdge(todo) {
        return {
            node: todo,
            cursor: ""
        };
    }
    static toTodosConnection(todos) {
        return {
            edges: todos.map(t => this.toEdge(t)),
            pageInfo: {
                hasPreviousPage: false,
                hasNextPage: false,
                startCursor: "",
                endCursor: ""
            }
        };
    }
}
exports.TodoMapper = TodoMapper;
//# sourceMappingURL=todoMapper.js.map