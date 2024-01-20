const { createSlice } = require("@reduxjs/toolkit");

const todolist = [
    { id: 1, title: 'Test1', description: 'Here is the test1 desc' },
    { id: 2, title: 'Test2', description: 'Here is the test2 desc' },
    { id: 3, title: 'Test3', description: 'Here is the test3 desc' },
];

export const TodoSlice = createSlice({
    name: 'todolist',
    initialState: todolist,
    reducers: {
        viewList(state) {
            state;
        },
        addToList(state, action) {
            state.push(action.payload);
        },
        removeTodo(state, action) {
            return state.filter(todo => todo.id !== action.payload.id);
        },
    },
});

export const { viewList, addToList, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
