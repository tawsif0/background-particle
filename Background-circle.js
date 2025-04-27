import React from 'react';

import ParticlesBg from 'particles-bg'; // <- Import Particles
import DotsBackground from './dots';

const heroCircle = () => {
    return (
        <section className="hero position-relative">
            {/* Particle Background */}
            <ParticlesBg type="circle" bg={true} />
         <DotsBackground />
        </section>
    );
};

export default heroCircle;
