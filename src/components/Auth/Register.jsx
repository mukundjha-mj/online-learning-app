import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(''); // Clear success message before new registration

        const result = await register({ username, email, password });
        if (result) {
            if (result.message === 'User registered successfully') {
                setSuccess(result.message);
                setUsername('');
                setEmail('');
                setPassword('');
                // navigate('/login'); Uncomment to navigate to login
            } else {
                setError(result.message);
            }
        } else {
            setError("Registration failed: unknown error");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 text-center text-blue-700">Join Our Community</h2>
                <p className="text-center text-gray-600 mb-8">
                    Start your learning journey with us today.
                </p>
                
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
                        <p className="text-red-700 text-sm font-medium">{error}</p>
                    </div>
                )}
                
                {success && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                        <p className="text-green-700 text-sm font-medium">{success}</p>
                    </div>
                )}

                <div className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-700 bg-gray-50 hover:bg-gray-100"
                        />
                    </div>

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
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-medium text-lg hover:opacity-90 transform transition-all duration-200 hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-200"
                    >
                        Register
                    </button>
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
