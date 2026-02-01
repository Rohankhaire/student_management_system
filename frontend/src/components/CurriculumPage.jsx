import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Map, Flag, Layers, Milestone, ChevronRight } from 'lucide-react';

const semesters = [
    {
        title: 'Year 1: Foundations',
        semesters: [
            { name: 'Semester 1', subjects: ['Introduction to CS', 'Calculus I', 'Physics Mechanics', 'English Comp'] },
            { name: 'Semester 2', subjects: ['Data Structures', 'Calculus II', 'Electricity & Magnetism', 'Ethics'] }
        ]
    },
    {
        title: 'Year 2: Specialization',
        semesters: [
            { name: 'Semester 3', subjects: ['Algorithms', 'Linear Algebra', 'Digital Logic', 'Database Systems'] },
            { name: 'Semester 4', subjects: ['Compilers', 'OS Principles', 'Probability', 'Web Development'] }
        ]
    }
];

const CurriculumPage = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Academic Roadmap</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>A comprehensive guide to your degree milestones and requirements.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn btn-secondary" style={{ display: 'flex', gap: '8px', padding: '0.75rem 1.5rem', borderRadius: '12px', background: 'white' }}>
                        <Map size={20} /> View Map
                    </button>
                </div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                <div style={{ position: 'absolute', left: '7px', top: '0', bottom: '0', width: '2px', background: 'var(--border-color)' }}></div>

                {semesters.map((year, yearIndex) => (
                    <div key={yearIndex} style={{ marginBottom: '4rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-27px', top: '0', width: '24px', height: '24px', background: 'var(--accent-color)', borderRadius: '50%', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Flag size={10} color="white" />
                        </div>

                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {year.title}
                            <span style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'var(--accent-glow)', color: 'var(--accent-color)', borderRadius: '20px' }}>In Progress</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                            {year.semesters.map((sem, semIndex) => (
                                <motion.div
                                    key={semIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (yearIndex * 2 + semIndex) * 0.1 }}
                                    className="card"
                                    style={{ background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', padding: '2rem' }}
                                    whileHover={{ scale: 1.02, borderColor: 'var(--accent-color)' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div style={{ background: 'var(--card-hover)', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                                            <Layers size={20} />
                                        </div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>{sem.name}</h3>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {sem.subjects.map((subject, sIdx) => (
                                            <div key={sIdx} style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', padding: '1rem', background: 'var(--card-hover)', borderRadius: '14px', cursor: 'pointer' }}>
                                                <BookOpen size={16} color="var(--text-secondary)" style={{ marginRight: '1rem' }} />
                                                <span style={{ flex: 1, fontSize: '0.95rem', fontWeight: '600' }}>{subject}</span>
                                                <ChevronRight size={16} color="var(--text-secondary)" />
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurriculumPage;
