import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, MapPin, Search, Plus } from 'lucide-react';

const instructors = [
    { id: 1, name: 'Dr. Sarah Wilson', role: 'Head of Physics', email: 's.wilson@uni.edu', courses: 4, students: 120, image: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Prof. James Chen', role: 'Computer Science', email: 'j.chen@uni.edu', courses: 3, students: 85, image: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Dr. Elena Rodriguez', role: 'Mathematics', email: 'e.rod@uni.edu', courses: 5, students: 150, image: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'Prof. David Miller', role: 'History of Art', email: 'd.miller@uni.edu', courses: 2, students: 45, image: 'https://i.pravatar.cc/150?u=4' },
];

const InstructorsPage = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Faculty Members</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Manage your team of world-class educators.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className="search-container" style={{ width: '250px' }}>
                        <Search className="search-icon" size={18} />
                        <input type="text" className="search-input" placeholder="Find instructor..." />
                    </div>
                    <button className="btn btn-primary" style={{ display: 'flex', gap: '8px', padding: '0.75rem 1.5rem', borderRadius: '12px' }}>
                        <Plus size={20} /> Add Faculty
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {instructors.map((instructor, index) => (
                    <motion.div
                        key={instructor.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="card"
                        style={{
                            background: 'var(--card-bg)',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)',
                            padding: '1.5rem',
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        whileHover={{ y: -10, borderColor: 'var(--accent-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '35%',
                            margin: '0 auto 1.5rem',
                            background: 'var(--accent-glow)',
                            padding: '4px'
                        }}>
                            <img src={instructor.image} alt={instructor.name} style={{ width: '100%', height: '100%', borderRadius: '32%', objectFit: 'cover' }} />
                        </div>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.25rem' }}>{instructor.name}</h3>
                        <p style={{ color: 'var(--accent-color)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>{instructor.role}</p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', padding: '1rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{instructor.courses}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Courses</div>
                            </div>
                            <div>
                                <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{instructor.students}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Students</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button style={{ flex: 1, padding: '0.6rem', background: 'var(--card-hover)', border: 'none', borderRadius: '10px', color: 'var(--text-primary)', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                <Mail size={16} /> Email
                            </button>
                            <button style={{ flex: 1, padding: '0.6rem', background: 'var(--accent-color)', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '600', cursor: 'pointer' }}>
                                Profile
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InstructorsPage;
