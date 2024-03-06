import {
	ADD_TODO,
	DELETE_TODO,
	CHANGE_STATUS,
	CHANGE_LABEL,
	CHANGE_MENU,
} from './types';

const stateInitial = {
	todos: [],
	menuActive: 'All',
};

const rootReducer = (state = stateInitial, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				// Thêm mới một todo, và thêm ở đầu danh sách
				todos: [action.item, ...state.todos],
			};
		case CHANGE_MENU:
			return {
				...state,
				menuActive: action.newMenuActive,
			};
		case DELETE_TODO:
			return {
				...state,
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
				...state,
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
				...state,
				todos: newTodos,
			};
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
