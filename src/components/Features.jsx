import React from 'react';
// import Tilt from 'index';
import Tilt from 'react-parallax-tilt';
// import './ParallaxEffectGlareScale.demozap.scss';
// import './ParallaxEffectGlareScale.demozap.scss';

import './Features.scss';

export default function Features() {
    return (
        <>
            <section className='features'>
                <h1>Features</h1>
                <div className='features-section'>
                    <div className='features-block'>

                        {/* === Item 1 === */}
                        <div className='features-block__items'>
                            <Tilt
                                className="parallax-effect-glare-scale item1"
                                perspective={500}
                                glareEnable={true}
                                glareMaxOpacity={0.45}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <div>Blockchain</div>
                                </div>
                            </Tilt>
                        </div>

                        {/* === Item 2 === */}
                        <div className='features-block__items'>
                            <Tilt
                                className="parallax-effect-glare-scale item2"
                                perspective={500}
                                glareEnable={true}
                                glareMaxOpacity={0.45}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <div>Front End</div>
                                </div>
                            </Tilt>
                        </div>

                        {/* === Item 3 === */}
                        <div className='features-block__items'>
                            <Tilt
                                className="parallax-effect-glare-scale item3"
                                perspective={500}
                                glareEnable={true}
                                glareMaxOpacity={0.45}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <div>Back End</div>
                                </div>
                            </Tilt>
                        </div>

                        {/* === Item 4 === */}
                        <div className='features-block__items '>
                            <Tilt
                                className="parallax-effect-glare-scale item4"
                                perspective={500}
                                glareEnable={true}
                                glareMaxOpacity={0.45}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <div>Cyber Security</div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>

                {/* <p className='features-end'>.</p> */}
            </section>
        </>
    );
}