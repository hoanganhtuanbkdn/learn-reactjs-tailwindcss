// context.js
import { createContext, useState } from 'react';
const AuthContext = createContext({
	authEmail: null,
	setAuthEmail: (email) => {},
});

const AuthContextProvider = ({ children }) => {
	const [authEmail, setAuthEmail] = useState(''); // Chúng ta sẽ tạo 1 value `email` cho context để nhận biết là người dùng đã đăng nhập hay chưa, khi đăng nhập thành công, chúng ta sẽ lưu email vào context
	return (
		<AuthContext.Provider value={{ authEmail, setAuthEmail }}>
			{children}
		</AuthContext.Provider>
	);
};
export { AuthContext, AuthContextProvider };
