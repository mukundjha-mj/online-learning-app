import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../../services/api';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login, isLoggedIn, logout } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = await apiLogin({ email, password });
        if (userData) {
            login(userData);
            navigate('/dashboard');
        } else {
            setError("Login failed");
        }
    };

    if (isLoggedIn) {
        return (
            <div className="text-center">
                <h2 className="text-3xl font-bold text-center mb-8">You are already logged in!</h2>
                <button
                    onClick={() => logout()}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 p-4">
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-4xl font-semibold text-center text-blue-700 mb-6">Log In to Your Account</h2>
                <p className="text-center text-gray-600 mb-8">
                    Access all your courses, track your progress, and keep learning!
                </p>
                
                {error && <p className="text-center text-red-500 mb-4">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700 bg-gray-50 hover:bg-gray-100"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700 bg-gray-50 hover:bg-gray-100"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium text-lg hover:opacity-90 transform transition-all duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    New here? <a href="/register" className="text-blue-600 hover:underline">Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
