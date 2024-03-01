const stateInitial = {
	todos: [],
};

const rootReducer = (state = stateInitial, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todos: [action.item, ...state.todos],
			};
		case 'DELETE_TODO':
			return {
				todos: state.todos.filter((item) => item.id !== action.item.id),
			};
		case 'CHANGE_STATUS': {
			const { id, newStatus } = action;
			const currentTodos = [...state.todos];
			const itemIndex = currentTodos.findIndex((item) => item.id === id);
			const targetItem = currentTodos[itemIndex];

			currentTodos[itemIndex] = {
				...targetItem,
				finish: newStatus,
			};
			return {
				todos: currentTodos,
			};
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
