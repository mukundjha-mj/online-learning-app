import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './components/Dashboard/UserProfile';
import CourseList from './components/Courses/CourseList';
import AdminDashboard from './components/Admin/AdminDashboard';
import CourseManagement from './components/Admin/CourseManagement';
import UserManagement from './components/Admin/UserManagement';
import AboutPage from './components/AboutPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/courses" element={<CourseManagement />} />
                    <Route path="/admin/users" element={<UserManagement />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
