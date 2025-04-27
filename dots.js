import React from 'react';

const DotsBackground = () => {
    return (
        <svg
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
            <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle
                        cx="10"
                        cy="10"
                        r="1.5"
                        fill="rgba(150, 150, 150, 0.3)
"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
    );
};

export default DotsBackground;
