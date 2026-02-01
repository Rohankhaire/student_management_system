import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = () => {
    return (
        <div className="grid">
            {[1, 2, 3].map((item) => (
                <motion.div
                    key={item}
                    className="card"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ height: '200px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    <div style={{ width: '60%', height: '24px', background: 'var(--card-hover)', borderRadius: '4px' }}></div>
                    <div style={{ width: '40%', height: '16px', background: 'var(--card-hover)', borderRadius: '4px' }}></div>
                    <div style={{ width: '100%', height: '60px', background: 'var(--card-hover)', borderRadius: '4px', marginTop: 'auto' }}></div>
                </motion.div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
