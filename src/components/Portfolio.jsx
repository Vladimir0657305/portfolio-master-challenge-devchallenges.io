import { motion } from 'framer-motion';
import './Portfolio.scss';

export default function Portfolio() {

    const portfolioAnimation = {
        hidden: {
            y: 105,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    }
    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
            >
                <div className='portfolio'>
                    <div className='portfolio-block'>
                        <h1>Portfolio block</h1>
                        <div className='portfolio-block__items'>

                            {/* === Block 1 === */}
                            <div className='portfolio-block__item block1'>
                                <svg width="16" height="16" fill="red" className="bi bi-heart-fill " viewBox="0 0 16 16">
                                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                <h3>Title</h3>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab magnam accusamus quos, est tenetur quasi repellat. Quae delectus quasi esse earum repellat inventore blanditiis reprehenderit. Ullam nam cumque impedit.</span>
                            </div>

                            {/* === Block 2 === */}
                            <div className='portfolio-block__item block2'>
                                <svg width="16" height="16" fill="red" className="bi bi-heart-fill " viewBox="0 0 16 16">
                                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                <h3>Title</h3>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab magnam accusamus quos, est tenetur quasi repellat. Quae delectus quasi esse earum repellat inventore blanditiis reprehenderit. Ullam nam cumque impedit.</span>
                            </div>

                            {/* === Block 3 === */}
                            <div className='portfolio-block__item block3'>
                                <svg width="16" height="16" fill="red" className="bi bi-heart-fill " viewBox="0 0 16 16">
                                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                                <h3>Title</h3>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab magnam accusamus quos, est tenetur quasi repellat. Quae delectus quasi esse earum repellat inventore blanditiis reprehenderit. Ullam nam cumque impedit.</span>
                            </div>

                        </div>

                    </div>
                </div>
            </motion.section>

        </>
    );
}