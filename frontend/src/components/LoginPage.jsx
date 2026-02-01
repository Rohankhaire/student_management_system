import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Lock, ArrowRight, Sparkles, User, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ROLE_STUDENT');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
        const body = isLogin ? { username, password } : { username, password, role };

        try {
            const response = await fetch(`http://localhost:10101${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                if (isLogin) {
                    const data = await response.json();
                    login(data);
                    navigate('/');
                } else {
                    setIsLogin(true);
                    alert('Registration successful! Please login.');
                }
            } else {
                const errorData = await response.text();
                setError(errorData || 'Authentication failed');
            }
        } catch (err) {
            setError('Connection error. Is the backend running?');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-color)',
            padding: '2rem'
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'fixed',
                top: '-10%',
                right: '-5%',
                width: '40vw',
                height: '40vw',
                background: 'var(--accent-glow)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'fixed',
                bottom: '-10%',
                left: '-5%',
                width: '30vw',
                height: '30vw',
                background: 'rgba(249, 115, 22, 0.1)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                zIndex: 0
            }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    background: 'var(--card-bg)',
                    borderRadius: '32px',
                    border: '1px solid var(--border-color)',
                    padding: '3rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'var(--accent-color)',
                        color: 'white',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)'
                    }}>
                        <GraduationCap size={32} />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                        {isLogin ? 'Welcome Back' : 'Join StudentHub'}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        {isLogin ? 'Enter your credentials to access your dashboard.' : 'Create your account to start your journey.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Username</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                style={{
                                    width: '100%',
                                    padding: '0.875rem 1rem 0.875rem 3rem',
                                    borderRadius: '14px',
                                    border: '2px solid var(--border-color)',
                                    background: 'var(--bg-color)',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    focusBorderColor: 'var(--accent-color)'
                                }}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%',
                                    padding: '0.875rem 1rem 0.875rem 3rem',
                                    borderRadius: '14px',
                                    border: '2px solid var(--border-color)',
                                    background: 'var(--bg-color)',
                                    fontSize: '0.95rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    {!isLogin && (
                        <div className="input-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>I am a...</label>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                <button
                                    type="button"
                                    onClick={() => setRole('ROLE_STUDENT')}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '12px',
                                        border: `2px solid ${role === 'ROLE_STUDENT' ? 'var(--accent-color)' : 'var(--border-color)'}`,
                                        background: role === 'ROLE_STUDENT' ? 'var(--accent-glow)' : 'transparent',
                                        color: role === 'ROLE_STUDENT' ? 'var(--accent-color)' : 'var(--text-secondary)',
                                        fontWeight: '700',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole('ROLE_ADMIN')}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '12px',
                                        border: `2px solid ${role === 'ROLE_ADMIN' ? 'var(--accent-color)' : 'var(--border-color)'}`,
                                        background: role === 'ROLE_ADMIN' ? 'var(--accent-glow)' : 'transparent',
                                        color: role === 'ROLE_ADMIN' ? 'var(--accent-color)' : 'var(--text-secondary)',
                                        fontWeight: '700',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Admin
                                </button>
                            </div>
                        </div>
                    )}

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                padding: '0.75rem',
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: 'var(--danger)',
                                borderRadius: '12px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                textAlign: 'center'
                            }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                            padding: '1rem',
                            background: 'var(--accent-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '14px',
                            fontWeight: '700',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <div style={{ position: 'relative', margin: '1.5rem 0' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--border-color)', zIndex: 0 }}></div>
                        <span style={{ position: 'relative', background: 'var(--card-bg)', padding: '0 1rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Demo Access</span>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            setUsername('admin@gmail.com');
                            setPassword('admin@123');
                        }}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'var(--accent-glow)',
                            border: '1px solid var(--accent-color)',
                            borderRadius: '12px',
                            color: 'var(--accent-color)',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            marginBottom: '1.5rem'
                        }}
                    >
                        <ShieldCheck size={16} /> Login as Admin (admin@gmail.com)
                    </button>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--accent-color)',
                                fontWeight: '700',
                                marginLeft: '0.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            {isLogin ? 'Register Now' : 'Login here'}
                        </button>
                    </p>
                </div>
            </motion.div>

            {/* Bottom Info */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <ShieldCheck size={16} /> Secure Academic Portal v1.0
            </div>
        </div>
    );
};

export default LoginPage;
