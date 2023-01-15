import React from 'react';
import Tilt from 'index';
// import './ParallaxEffectGlareScale.demozap.scss';
import './ParallaxEffectGlareScale.demozap.scss';

import './Features.scss';

export default function Features() {
    return(
        <>
            <section className='about'>
                <div className='about-block'>
                    <div className='about-block__items'>
                        <Tilt
                            className="parallax-effect-glare-scale"
                            perspective={500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.02}
                        >
                            <div className="inner-element">
                                <div>React</div>
                                <div>Parallax Tilt</div>
                                <div>👀</div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </section>
        </>
    );
}