// todoReducer.js
import { ADD_TODO, CHANGE_LABEL, CHANGE_STATUS, DELETE_TODO } from './types';

const stateInitial = {
	todos: [],
};

const rootReducer = (state = stateInitial, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				// Thêm mới một todo, và thêm ở đầu danh sách
				todos: [action.item, ...state.todos],
			};
		case DELETE_TODO:
			return {
				todos: state.todos.filter((item) => item.id !== action.item.id),
			};
		case CHANGE_STATUS: {
			const { id, newStatus } = action;
			const newTodos = state.todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							completed: newStatus,
					  }
					: todo
			);
			return {
				todos: newTodos,
			};
		}
		case CHANGE_LABEL: {
			const { id, newLabel } = action;
			const newTodos = state.todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							label: newLabel,
					  }
					: todo
			);
			return {
				todos: newTodos,
			};
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
