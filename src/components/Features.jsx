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
                
                <h1>Information Technology</h1>
                <div className='features-text'>
                    <span>21st century has come to be known as the era of Information Technology; it is the key driver of economic growth of not only a nation, but rather the whole world. The growth and progress of every sector of the country today depends on the level of Information Technology.</span>
                    <span>Furthermore, technology is not important only at the work place, but also in our everyday life; whether it is working with the microwave oven which is a cooking appliance or a super computer, an appliance is based on information technology, technology helps everywhere.</span>
                </div>
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