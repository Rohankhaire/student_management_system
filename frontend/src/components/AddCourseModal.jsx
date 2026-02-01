import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Layout, Clock, User as UserIcon, Type, BookOpen } from 'lucide-react';

const AddCourseModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '',
        instructor: '',
        type: 'Semester',
        status: 'DRAFT'
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Course name is required';
        if (!formData.instructor) newErrors.instructor = 'Instructor is required';
        if (!formData.duration) newErrors.duration = 'Duration is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        onSubmit(formData);
        setFormData({ name: '', description: '', duration: '', instructor: '', type: 'Semester', status: 'DRAFT' });
    };

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 2000 }}
                onClick={(e) => e.target === e.currentTarget && onClose()}
            >
                <motion.div
                    className="modal"
                    initial={{ y: 50, scale: 0.9, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 50, scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    style={{ maxWidth: '700px', borderRadius: '24px', overflow: 'hidden' }}
                >
                    <div className="modal-header" style={{
                        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                        padding: '2rem',
                        borderBottom: 'none'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="modal-title" style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800' }}>Launch New Course</h3>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>Design your curriculum with premium details.</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ rotate: 90, scale: 1.1, background: 'rgba(255,255,255,0.2)' }}
                            whileTap={{ scale: 0.9 }}
                            className="icon-btn"
                            onClick={onClose}
                            style={{ color: 'white', padding: '8px', borderRadius: '12px' }}
                        >
                            <X size={24} />
                        </motion.button>
                    </div>

                    <form onSubmit={handleSubmit} style={{ background: 'white' }}>
                        <div className="modal-body" style={{ padding: '2.5rem' }}>
                            {/* Name */}
                            <div className="input-group">
                                <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                    <Type size={16} color="var(--accent-color)" /> Course Name
                                </label>
                                <input
                                    type="text"
                                    className="input-field"
                                    value={formData.name}
                                    onChange={e => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: null });
                                    }}
                                    placeholder="e.g. Advanced Quantum Computing"
                                    style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                />
                                <AnimatePresence>
                                    {errors.name && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                                        >
                                            <Sparkles size={12} /> {errors.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                                <div className="input-group">
                                    <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                                        <Layout size={16} color="var(--accent-color)" /> Course Type
                                    </label>
                                    <select
                                        className="input-field"
                                        value={formData.type}
                                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                                        style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                    >
                                        <option value="Semester">Academic Semester</option>
                                        <option value="Certification">Professional Certification</option>
                                        <option value="Workshop">Interactive Workshop</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                                        <Sparkles size={16} color="var(--accent-orange)" /> Initial Status
                                    </label>
                                    <select
                                        className="input-field"
                                        value={formData.status}
                                        onChange={e => setFormData({ ...formData, status: e.target.value })}
                                        style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                    >
                                        <option value="DRAFT">Save as Draft</option>
                                        <option value="PUBLISHED">Immediate Publish</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
                                <div className="input-group">
                                    <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                                        <UserIcon size={16} color="var(--accent-color)" /> Instructor
                                    </label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={formData.instructor}
                                        onChange={e => setFormData({ ...formData, instructor: e.target.value })}
                                        placeholder="e.g. Prof. Feynman"
                                        style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700' }}>
                                        <Clock size={16} color="var(--accent-color)" /> Duration
                                    </label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={formData.duration}
                                        onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                        placeholder="e.g. 15 Weeks"
                                        style={{ padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                    />
                                </div>
                            </div>

                            <div className="input-group" style={{ marginTop: '1rem' }}>
                                <label className="input-label" style={{ fontWeight: '700' }}>Curriculum Summary</label>
                                <textarea
                                    className="input-field"
                                    rows="4"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Briefly describe what students will achieve..."
                                    style={{ resize: 'none', padding: '1rem', borderRadius: '12px', border: '2px solid #f1f5f9' }}
                                ></textarea>
                            </div>
                        </div>

                        <div className="modal-footer" style={{
                            background: '#f8fafc',
                            padding: '1.5rem 2.5rem',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '1rem',
                            borderTop: '1px solid #e2e8f0'
                        }}>
                            <button type="button" className="btn btn-secondary" onClick={onClose} style={{ borderRadius: '12px', padding: '0.75rem 1.5rem' }}>Discard</button>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)' }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    background: 'linear-gradient(135deg, var(--accent-color) 0%, #1e40af 100%)',
                                    borderRadius: '12px',
                                    padding: '0.6rem 1.75rem',
                                    fontWeight: '700'
                                }}
                            >
                                Publish Course
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default AddCourseModal;
