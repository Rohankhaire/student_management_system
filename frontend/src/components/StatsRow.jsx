import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatsRow = ({ courses }) => {
    const navigate = useNavigate();
    const totalCourses = courses.length;
    const activeInstructors = new Set(courses.map(c => c.instructor)).size;
    const totalStudents = courses.reduce((acc, curr) => acc + (curr.studentCount || 0), 0);

    const stats = [
        { label: 'Total Courses', value: totalCourses, icon: BookOpen, color: '#2563eb', path: '/courses' },
        { label: 'Active Instructors', value: activeInstructors, icon: Users, color: '#f97316', path: '/instructors' },
        { label: 'Total Students', value: totalStudents, icon: GraduationCap, color: '#22c55e', path: '/students' },
    ];

    return (
        <div className="stats-grid">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="stat-card"
                    onClick={() => navigate(stat.path)}
                    whileHover={{
                        y: -5,
                        borderColor: stat.color,
                        boxShadow: `0 10px 20px -5px ${stat.color}20`
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="stat-icon-wrapper" style={{
                        background: `${stat.color}10`,
                        color: stat.color
                    }}>
                        <stat.icon size={28} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: 1, marginBottom: '0.25rem' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{stat.label}</div>
                    </div>
                    <div style={{ color: 'var(--border-color)' }}>
                        <ChevronRight size={20} />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsRow;
