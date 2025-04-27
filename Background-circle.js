import React from 'react';

import ParticlesBg from 'particles-bg'; // <- Import Particles


const heroCircle = () => {
    return (
        <section className="hero position-relative">
            {/* Particle Background */}
            <ParticlesBg type="circle" bg={true} />
        </section>
    );
};

export default heroCircle;
