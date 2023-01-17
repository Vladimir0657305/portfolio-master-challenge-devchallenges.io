import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.scss';

export default function Portfolio() {
    let custom;

    const portfolioAnimation = {
        hidden: {
            y: 300,
            // scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            // scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2, duration: .4 }
        }),
    }

    const portfolioTextAnimation = {
        hidden: {
            // y: 300,
            scale: 0,
            opacity: 0,
        },
        visible: custom => ({
            // y: 0,
            scale: 1,
            opacity: 1,
            transition: { delay: custom * 0.2, duration: .4 }
            // transition: all 1.2s cubic-bezier(0.310, -0.250, 0.000, 1.390) 0s;
            // animate={{ y: [0.310, -0.250, 0.000, 1.390] }}
            // animate={{ y: [null, 100, 0] }}
        }),
    }
    return (
        <>
            <section>
                <div className='portfolio'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.1 }}
                        className='portfolio-block'>
                        <motion.h1 custom={1} variants={portfolioTextAnimation} >Portfolio block</motion.h1>
                        {/* transition={{ type: "inertia", velocity: 50 }} */}
                        <motion.p custom={4} variants={portfolioTextAnimation}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nisi?</motion.p>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ amount: 0.2 }}
                            className='portfolio-block__items'>

                            {/* === Block 1 === */}
                            <motion.div custom={4} variants={portfolioAnimation} className='portfolio-block__item block1'>
                                <img src="../images/countries.jpg" alt="countries" />
                                <h3>Frontend Mentor <br />REST Countries API</h3>
                                <span>
                                    Users able to:
                                    <br />
                                    - See all countries from the API on the homepage <br />
                                    - Search for a country using an `input` field <br />
                                    - Filter countries by region <br />
                                    - Click on a country to see more detailed information on a separate page <br />
                                    - Click through to the border countries on the detail page <br />
                                    - Toggle the color scheme between light and dark mode
                                </span>
                            </motion.div>

                            {/* === Block 2 === */}
                            <motion.div custom={5} variants={portfolioAnimation} className='portfolio-block__item block2'>
                                <img src="../images/form.jpg" alt="form" />
                                <h3>Frontend Mentor<br />Multi-step form</h3>
                                <span>
                                    Users able to:<br />

                                    - Complete each step of the sequence<br /><br />
                                    - See a summary of their selections on the final step and confirm their order<br /><br />
                                    - View the optimal layout for the interface depending on their device's screen size<br /><br />
                                    - See hover and focus states for all interactive elements on the page
                                </span>
                            </motion.div>

                            {/* === Block 3 === */}
                            <motion.div custom={6} variants={portfolioAnimation} className='portfolio-block__item block3'>
                                <img src="../images/filter.jpg" alt="filter" />
                                <h3>Frontend Mentor<br />Job listings with filtering solution</h3>
                                <span>
                                    Users should be able to:<br /><br />

                                    - View the optimal layout for the site depending on their device's screen size<br /><br />
                                    - See hover states for all interactive elements on the page<br /><br />
                                    - Filter job listings based on the categories
                                </span>
                            </motion.div>

                        </motion.div>

                    </motion.div>
                </div>
            </section>

        </>
    );
}