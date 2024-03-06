// reducers.js
import todoReducer from './todoSlice'; // Import reducer của Todo
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		todos: todoReducer,
		// Nếu bạn có các reducers khác, bạn có thể kết hợp chúng ở đây
	},
});

export default store;
