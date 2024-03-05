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
			const currentTodos = [...state.todos];
			// Tìm vị trí của phần tử cần thay đổi
			const itemIndex = currentTodos.findIndex((item) => item.id === id);

			// Phần từ cần thay đổi
			const targetItem = currentTodos[itemIndex];

			// Gán dữ liệu mới cho phần tử cần thay đổi của mảng
			currentTodos[itemIndex] = {
				...targetItem,
				finish: newStatus,
			};
			return {
				...state,
				todos: currentTodos,
			};
		}
		case CHANGE_LABEL: {
			const { id, newLabel } = action;
			const currentTodos = [...state.todos];

			// Tìm vị trí của phần tử cần thay đổi
			const itemIndex = currentTodos.findIndex((item) => item.id === id);

			// Phần từ cần thay đổi
			const targetItem = currentTodos[itemIndex];

			// Gán dữ liệu mới cho phần tử cần thay đổi của mảng
			currentTodos[itemIndex] = {
				...targetItem,
				label: newLabel,
			};
			return {
				...state,
				todos: currentTodos,
			};
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
