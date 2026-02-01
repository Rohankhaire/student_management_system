import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Users,
  UserSquare,
  Settings,
  Plus,
  Search,
  Bell,
  User,
  Clock,
  ChevronRight,
  MoreVertical,
  LogOut,
  Trash2
} from 'lucide-react';

// Components
import SkeletonLoader from './components/SkeletonLoader';
import EmptyState from './components/EmptyState';
import StatsRow from './components/StatsRow';
import AddCourseModal from './components/AddCourseModal';
import InstructorsPage from './components/InstructorsPage';
import StudentsPage from './components/StudentsPage';
import CurriculumPage from './components/CurriculumPage';
import SettingsPage from './components/SettingsPage';
import LoginPage from './components/LoginPage';
import { useAuth } from './context/AuthContext';

const API_URL = 'http://localhost:10101/api/courses';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="page-transition"
  >
    {children}
  </motion.div>
);

const Sidebar = ({ logout }) => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Curriculum', icon: BookOpen, path: '/curriculum' },
    { name: 'Instructors', icon: UserSquare, path: '/instructors' },
    { name: 'Students', icon: Users, path: '/students' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div style={{ background: 'var(--accent-color)', color: 'white', padding: '8px', borderRadius: '10px' }}>
          <GraduationCap size={24} />
        </div>
        <h2 className="logo" style={{ marginBottom: 0 }}>StudentHub</h2>
      </div>

      <nav className="sidebar-nav">
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 1rem 0.75rem 1rem', fontWeight: '600' }}>Main Menu</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item" style={{ cursor: 'pointer' }} onClick={logout}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
};

const Header = ({ user, searchTerm, setSearchTerm }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New instructor joined: Dr. Aris', time: '2m ago', unread: true },
    { id: 2, text: 'Course "Quantum Physics" published', time: '1h ago', unread: true },
    { id: 3, text: 'System update successfully completed', time: '3h ago', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleNotificationClick = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  return (
    <header className="top-bar">
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search for courses, events or people..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ position: 'relative' }}>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'var(--card-hover)' }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn"
            style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px' }}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '8px',
                height: '8px',
                background: 'var(--accent-orange)',
                borderRadius: '50%',
                border: '2px solid white'
              }}></span>
            )}
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '10px',
                  width: '300px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  zIndex: 1000
                }}
              >
                <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Notifications
                  {unreadCount > 0 && (
                    <motion.span
                      whileHover={{ color: 'var(--accent-orange)' }}
                      onClick={handleMarkAllRead}
                      style={{ color: 'var(--accent-color)', fontSize: '0.75rem', cursor: 'pointer' }}
                    >
                      Mark all read
                    </motion.span>
                  )}
                </div>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => handleNotificationClick(n.id)}
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid #f8fafc',
                        cursor: 'pointer',
                        background: n.unread ? 'rgba(37, 99, 235, 0.03)' : 'transparent',
                        position: 'relative',
                        transition: 'background 0.2s'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <p style={{
                          fontSize: '0.85rem',
                          marginBottom: '4px',
                          fontWeight: n.unread ? '700' : '500',
                          color: n.unread ? 'var(--text-primary)' : 'var(--text-secondary)',
                          flex: 1
                        }}>
                          {n.text}
                        </p>
                        {n.unread && (
                          <div style={{ width: '6px', height: '6px', background: 'var(--accent-color)', borderRadius: '50%', marginTop: '6px' }}></div>
                        )}
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{n.time}</span>
                    </div>
                  ))}
                  {notifications.length === 0 && (
                    <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      No new notifications
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '4px 12px 4px 4px', background: 'var(--card-hover)', borderRadius: '14px', cursor: 'pointer' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={18} />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{user?.username || 'Guest'}</span>
        </div>
      </div>
    </header>
  );
};

const DashboardPage = ({ user, courses, loading, onAddCourse }) => {
  const isAdmin = user?.role === 'ROLE_ADMIN';

  return (
    <PageWrapper>
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>Welcome back, {user?.username}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Here's what's happening with your university today.</p>
      </div>

      <StatsRow courses={courses} />

      <div style={{ display: 'grid', gridTemplateColumns: isAdmin ? '2fr 1fr' : '1fr', gap: '2rem', marginTop: '1rem' }}>
        <div className="card" style={{ background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Recent Courses</h3>
            <NavLink to="/courses" style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>View All</NavLink>
          </div>
          {loading ? (
            <SkeletonLoader />
          ) : courses.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {courses.slice(0, 3).map(course => (
                <div key={course.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--card-hover)', borderRadius: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: 'var(--accent-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <BookOpen size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700' }}>{course.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{course.instructor} • {course.duration}</p>
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', background: 'white', padding: '4px 10px', borderRadius: '8px', color: 'var(--accent-color)' }}>
                    {course.status}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '2rem' }}>No courses available yet.</p>
          )}
        </div>

        {isAdmin && (
          <div className="card" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: '24px', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Plus size={20} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Quick Action</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Need to add a new course to the curriculum? Start here.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAddCourse}
              style={{
                background: 'white',
                color: '#0f172a',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Create New Course
            </motion.button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

const CoursesPage = ({ user, courses, loading, searchTerm, onAddCourse, onDeleteCourse }) => {
  const isAdmin = user?.role === 'ROLE_ADMIN';
  const filteredCourses = courses.filter(course =>
    course.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Course Catalog</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Browse and manage all available academic courses.</p>
        </div>
        {isAdmin && (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            onClick={onAddCourse}
            title="Create New Course"
            style={{
              background: 'linear-gradient(135deg, var(--accent-color) 0%, #1e40af 100%)',
              width: '44px',
              height: '44px',
              padding: 0,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Plus size={20} />
          </motion.button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader"><SkeletonLoader /></motion.div>
        ) : filteredCourses.length === 0 ? (
          <motion.div key="empty"><EmptyState onAddCourse={onAddCourse} /></motion.div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id || index}
                className="course-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="course-card-image">
                  <div className="course-status-badge" style={{
                    background: course.status === 'PUBLISHED' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(100, 116, 139, 0.9)',
                    color: 'white'
                  }}>
                    {course.status || 'DRAFT'}
                  </div>
                  {isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.1, background: '#ef4444' }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDeleteCourse(course.id)}
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        zIndex: 10,
                        background: 'rgba(239, 68, 68, 0.8)',
                        color: 'white',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        backdropFilter: 'blur(4px)',
                        display: 'flex'
                      }}
                      title="Delete Course"
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  )}
                </div>
                <div className="course-content">
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-color)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                    {course.type || 'Academic'}
                  </span>
                  <h3 className="course-title">{course.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{course.description}</p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                      <UserSquare size={14} color="var(--text-secondary)" />
                      <span style={{ fontWeight: '600' }}>{course.instructor}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                      <Clock size={14} color="var(--text-secondary)" />
                      <span style={{ fontWeight: '600' }}>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

const PlaceholderPage = ({ title, icon: Icon }) => (
  <PageWrapper>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
      <div style={{ background: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '2rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
        <Icon size={48} />
      </div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>This module is currently being optimized for extreme interactivity. Check back soon!</p>
    </div>
  </PageWrapper>
);

function AppContent() {
  const { user, logout } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const location = useLocation();

  const isAdmin = user?.role === 'ROLE_ADMIN';

  useEffect(() => {
    if (user) {
      fetchCourses();
    }
  }, [user]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setCourses(data || []);
    } catch (error) {
      showToast('Connection failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const handleCreateCourse = async (formData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      const newCourse = await response.json();
      setCourses(prev => [...prev, newCourse]);
      setIsModalOpen(false);
      showToast('Course published!');
    } catch (error) {
      showToast('Save failed', 'error');
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        setCourses(prev => prev.filter(c => c.id !== id));
        showToast('Course removed');
      } else {
        showToast('Delete failed', 'error');
      }
    } catch (error) {
      showToast('Connection error', 'error');
    }
  };

  if (!user) {
    return <LoginPage />;
  }

  return (
    <>
      <Sidebar logout={logout} />
      <div className="main-wrapper">
        <Header user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="page-container">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<DashboardPage user={user} courses={courses} loading={loading} onAddCourse={() => setIsModalOpen(true)} />} />
              <Route path="/courses" element={<CoursesPage user={user} courses={courses} loading={loading} searchTerm={searchTerm} onAddCourse={() => setIsModalOpen(true)} onDeleteCourse={handleDeleteCourse} />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/instructors" element={<InstructorsPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>

      {isAdmin && (
        <motion.button
          className="fab"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={24} />
        </motion.button>
      )}

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCourse}
      />

      <div className="toast-container">
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            className={`toast toast-${toast.type}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            {toast.message}
          </motion.div>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
