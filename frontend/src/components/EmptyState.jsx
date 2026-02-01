import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserPlus, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmptyState = ({ onAddCourse }) => {
    const navigate = useNavigate();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="empty-state"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={item} style={{ marginBottom: '3rem' }}>
                <div style={{
                    background: 'rgba(37, 99, 235, 0.05)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '35%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem auto',
                    transform: 'rotate(-5deg)'
                }}>
                    <BookOpen size={48} color="#2563eb" />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>No courses found</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Your academic catalog is looking a bit quiet. Start building your system using the guides below.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    variants={item}
                    className="card"
                    onClick={onAddCourse}
                    style={{ cursor: 'pointer', textAlign: 'left', border: '1px solid var(--border-color)', position: 'relative' }}
                    whileHover={{ y: -10, borderColor: 'var(--accent-orange)', boxShadow: '0 15px 30px rgba(249, 115, 22, 0.15)' }}
                >
                    <div style={{ marginBottom: '1.5rem', width: '40px', height: '40px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-orange)' }}>
                        <BookOpen size={20} />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem', fontWeight: '700' }}>Create Course</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Define course titles, types, and durations to start your semester.</p>
                </motion.div>

                <motion.div
                    variants={item}
                    className="card"
                    onClick={() => navigate('/instructors')}
                    style={{ cursor: 'pointer', textAlign: 'left', border: '1px solid var(--border-color)' }}
                    whileHover={{ y: -10, borderColor: 'var(--accent-color)', boxShadow: '0 15px 30px rgba(37, 99, 235, 0.15)' }}
                >
                    <div style={{ marginBottom: '1.5rem', width: '40px', height: '40px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                        <UserPlus size={20} />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem', fontWeight: '700' }}>Assign Instructor</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Invite faculty members and link them to specialized courses.</p>
                </motion.div>

                <motion.div
                    variants={item}
                    className="card"
                    onClick={() => navigate('/curriculum')}
                    style={{ cursor: 'pointer', textAlign: 'left', border: '1px solid var(--border-color)' }}
                    whileHover={{ y: -10, borderColor: '#22c55e', boxShadow: '0 15px 30px rgba(34, 197, 94, 0.15)' }}
                >
                    <div style={{ marginBottom: '1.5rem', width: '40px', height: '40px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22c55e' }}>
                        <Layers size={20} />
                    </div>
                    <h4 style={{ marginBottom: '0.5rem', fontWeight: '700' }}>Add Subjects</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Organize lessons into logical sequences and modules.</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EmptyState;
