import {
	ADD_TODO,
	DELETE_TODO,
	CHANGE_STATUS,
	CHANGE_LABEL,
	CHANGE_MENU,
} from './types';
export const AddTodo = (item) => {
	return {
		type: ADD_TODO,
		item,
	};
};

export const DeleteTodo = (item) => {
	return {
		type: DELETE_TODO,
		item,
	};
};

export const ChangeStatus = (id, newStatus) => {
	return {
		type: CHANGE_STATUS,
		id,
		newStatus,
	};
};

export const ChangeLabel = (id, newLabel) => {
	return {
		type: CHANGE_LABEL,
		id,
		newLabel,
	};
};
export const ChangeMenu = (newMenuActive) => {
	return {
		type: CHANGE_MENU,
		newMenuActive,
	};
};
