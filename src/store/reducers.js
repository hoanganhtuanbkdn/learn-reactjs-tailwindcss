// reducers.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // Import reducer của Todo

const rootReducer = combineReducers({
	todos: todoReducer,
	// Nếu bạn có các reducers khác, bạn có thể kết hợp chúng ở đây
});

export default rootReducer;
