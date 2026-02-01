import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, Save, Trash2 } from 'lucide-react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'language', label: 'Language', icon: Globe },
    ];

    return (
        <div style={{ padding: '1rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>Control Center</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Personalize your experience and manage account security.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem' }}>
                {/* Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.25rem',
                                borderRadius: '16px',
                                border: 'none',
                                background: activeTab === tab.id ? 'var(--accent-color)' : 'transparent',
                                color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                textAlign: 'left'
                            }}
                        >
                            <tab.icon size={20} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="card"
                    style={{ background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', padding: '2.5rem' }}
                >
                    {activeTab === 'profile' && (
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem' }}>Public Profile</h2>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                                <div style={{ width: '100px', height: '100px', borderRadius: '35%', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', fontSize: '2rem', fontWeight: '800' }}>
                                    AD
                                </div>
                                <div>
                                    <button className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '10px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Change Photo</button>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>JPG, GIF or PNG. Max size of 800K</p>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div className="input-group">
                                    <label className="input-label" style={{ fontWeight: '700', fontSize: '0.9rem' }}>Full Name</label>
                                    <input type="text" className="input-field" defaultValue="Administrator" style={{ padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', width: '100%' }} />
                                </div>
                                <div className="input-group">
                                    <label className="input-label" style={{ fontWeight: '700', fontSize: '0.9rem' }}>Email Address</label>
                                    <input type="email" className="input-field" defaultValue="admin@university.edu" style={{ padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', width: '100%' }} />
                                </div>
                                <div className="input-group" style={{ gridColumn: 'span 2' }}>
                                    <label className="input-label" style={{ fontWeight: '700', fontSize: '0.9rem' }}>Biography</label>
                                    <textarea className="input-field" rows="4" style={{ padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', width: '100%', resize: 'none' }} defaultValue="Academic director with 10+ years of experience in higher education management."></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem' }}>Notifications Settings</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { title: 'Email Notifications', desc: 'Receive daily summaries of academic activity.' },
                                    { title: 'Course Updates', desc: 'Get notified when instructors publish new material.' },
                                    { title: 'System Alerts', desc: 'Important messages regarding platform maintenance.' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ fontWeight: '700', fontSize: '1rem' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
                                        </div>
                                        <div style={{ width: '44px', height: '24px', background: 'var(--accent-color)', borderRadius: '12px', position: 'relative', cursor: 'pointer' }}>
                                            <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', right: '3px', top: '3px' }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                        <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', background: 'transparent', border: '1px solid var(--border-color)' }}>Cancel</button>
                        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Save size={18} /> Save Changes
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SettingsPage;
