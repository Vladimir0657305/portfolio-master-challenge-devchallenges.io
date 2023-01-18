
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import ReactTypingEffect from 'react-typing-effect';
import './SiteHead.scss';
import { useState } from 'react';

export default function SiteHead() {
    SwiperCore.use([Autoplay]);
    const [show, setShow] = useState(1);

    const color =() => Math.floor(Math.random() * 250);

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}


                onSlideChange={(swiperCore) => {
                    const { activeIndex } = swiperCore;
                    switch (activeIndex) {
                        case (1): {
                            setShow(1);
                            break;
                        }
                        case (2): {
                            setShow(2);
                            break;
                        }
                        case (3): {
                            setShow(3);
                            break;
                        }
                        case (4): {
                            setShow(4);
                            break;
                        }
                        case (5): {
                            setShow(5);
                            break;
                        }
                        case (6): {
                            setShow(1);
                            break;
                        }
                    }
                }}
            >

                {/* === Slide 1 === */}
                <SwiperSlide className='swiperSlide'><img src="../images/siluet.jpg" alt="slide1" />
                    {
                        show == 1 &&
                        <div className='typingEffect slide1'>
                            <ReactTypingEffect
                                text={["Hello. I am Volodymyr."]}
                                cursorRenderer={false}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={3000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span
                                                        key={key}
                                                        // style={i % 2 === 0 ? { color: '#f5bb00' } : { color: '#50627B' }}
                                                        style={{ color: `rgb(${color()}, ${color()}, ${color()}`} }
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </div>
                    }
                </SwiperSlide>


                {/* === Slide 2 === */}
                <SwiperSlide className='swiperSlide'><img src="../images/coffe.jpg" alt="slide2" />
                    {
                        show == 2 &&
                        <div className='typingEffect slide2'>
                            <ReactTypingEffect
                                text={["I like coffe."]}
                                cursorRenderer={false}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={3000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span
                                                        key={key}
                                                        // style={i % 2 === 0 ? { color: '#442b15' } : { color: '#8ea604' }}
                                                        style={{ color: `rgb(${color()}, ${color()}, ${color()}` }}
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </div>
                    }
                </SwiperSlide>

                {/* === Slide 3 === */}
                <SwiperSlide className='swiperSlide'><img src="../images/programming.jpg" alt="slide3" />
                    {
                        show == 3 &&
                        <div className='typingEffect slide3'>
                            <ReactTypingEffect
                                text={["And i like programming."]}
                                cursorRenderer={false}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={3000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span
                                                        key={key}
                                                        // style={i % 2 === 0 ? { color: '#fff' } : { color: '#dab7a3' }}
                                                        style={{ color: `rgb(${color()}, ${color()}, ${color()}` }}
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </div>
                    }
                </SwiperSlide>

                {/* === Slide 4 === */}
                <SwiperSlide className='swiperSlide'><img src="../images/coffee-programming.jpg" alt="slide4" />
                    {
                        show == 4 &&
                        <div className='typingEffect slide4'>
                            <ReactTypingEffect
                                text={["And even more I like programming with coffee."]}
                                cursorRenderer={false}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={3000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span
                                                        key={key}
                                                        // style={i % 2 === 0 ? { color: '#c7b6b0' } : { color: '#f3fafa' }}
                                                        style={{ color: `rgb(${color()}, ${color()}, ${color()}` }}
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </div>
                    }
                </SwiperSlide>

                {/* === Slide 5 === */}
                <SwiperSlide className='swiperSlide'><img src="../images/collag.jpg" alt="slide5" />
                    {
                        show == 5 &&
                        <div className='typingEffect slide5'>
                            <ReactTypingEffect
                                text={["What do you like?"]}
                                cursorRenderer={false}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={3000}
                                typingDelay={1000}
                                displayTextRenderer={(text, i) => {
                                    return (
                                        <h1>
                                            {text.split('').map((char, i) => {
                                                const key = `${i}`;
                                                return (
                                                    <span
                                                        key={key}
                                                        // style={i % 2 === 0 ? { color: '#a1fcdf' } : { color: '#fcd29f' }}
                                                        style={{ color: `rgb(${color()}, ${color()}, ${color()}` }}
                                                    >{char}</span>
                                                );
                                            })}
                                        </h1>
                                    );
                                }}
                            />
                        </div>
                    }
                </SwiperSlide>

            </Swiper>
        </>
    );
}