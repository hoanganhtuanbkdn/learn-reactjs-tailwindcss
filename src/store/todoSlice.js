import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action) {
			state.todos = [action.payload, ...state.todos];
		},
		deleteTodo(state, action) {
			const { id } = action.payload;
			state.todos = state.todos.filter((todo) => todo.id !== id);
		},
		changeStatus(state, action) {
			const { id, newStatus } = action.payload;

			state.todos = [...state.todos].map((todo) =>
				todo.id === id ? { ...todo, status: newStatus } : todo
			);
		},
		changeLabel(state, action) {
			const { id, label, category } = action.payload;

			state.todos = [...state.todos].map((todo) =>
				todo.id === id
					? { ...todo, label: label, category: category }
					: todo
			);
		},
	},
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { addTodo, deleteTodo, changeStatus, changeLabel } =
	todosSlice.actions;

// Export the slice reducer as the default export
export default todosSlice.reducer;
