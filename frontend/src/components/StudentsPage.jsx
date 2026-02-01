import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

const students = [
    { id: 'STU001', name: 'Alex Thompson', major: 'Computer Science', year: 'Junior', gpa: '3.8', status: 'Active', courses: 6 },
    { id: 'STU002', name: 'Maria Garcia', major: 'Physics', year: 'Senior', gpa: '3.9', status: 'Active', courses: 4 },
    { id: 'STU003', name: 'Jordan Lee', major: 'Mathematics', year: 'Freshman', gpa: '3.5', status: 'On Leave', courses: 0 },
    { id: 'STU004', name: 'Sophie Miller', major: 'Art History', year: 'Sophomore', gpa: '3.7', status: 'Active', courses: 5 },
    { id: 'STU005', name: 'Zayn Malik', major: 'Music', year: 'Senior', gpa: '3.6', status: 'Active', courses: 3 },
];

const StudentsPage = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Student Directory</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Track academic performance and enrollment across all majors.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className="search-container" style={{ width: '300px' }}>
                        <Search className="search-icon" size={18} />
                        <input type="text" className="search-input" placeholder="Search by name or ID..." />
                    </div>
                    <button className="icon-btn" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div style={{ background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ background: 'var(--card-hover)', borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}>STUDENT</th>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}>ID</th>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}>MAJOR & YEAR</th>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}>GPA</th>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}>STATUS</th>
                            <th style={{ padding: '1.25rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-secondary)' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <motion.tr
                                key={student.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                style={{ borderBottom: '1px solid var(--border-color)', cursor: 'pointer' }}
                                whileHover={{ background: 'rgba(37, 99, 235, 0.02)' }}
                            >
                                <td style={{ padding: '1.25rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'var(--accent-glow)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                                            <GraduationCap size={20} />
                                        </div>
                                        <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{student.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>{student.id}</td>
                                <td style={{ padding: '1.25rem' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>{student.major}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{student.year}</div>
                                </td>
                                <td style={{ padding: '1.25rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <div style={{ width: '40px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                                            <div style={{ width: `${(parseFloat(student.gpa) / 4) * 100}%`, height: '100%', background: 'var(--accent-color)' }}></div>
                                        </div>
                                        <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{student.gpa}</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1.25rem' }}>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        padding: '4px 10px',
                                        borderRadius: '8px',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        background: student.status === 'Active' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                                        color: student.status === 'Active' ? 'var(--success)' : 'var(--text-secondary)'
                                    }}>
                                        {student.status === 'Active' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                        {student.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                                    <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                        <MoreVertical size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <div style={{ padding: '1.25rem', textAlign: 'center', background: 'var(--card-hover)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', cursor: 'pointer' }}>View all 2,450 students</span>
                </div>
            </div>
        </div>
    );
};

export default StudentsPage;
