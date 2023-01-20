import { createRef, useEffect, Suspense, lazy } from 'react';
import './Preloader.scss';

// const MainArea = lazy(() => import('../MainArea/MainArea'));

export default function Preloader() {
    const viewRef = createRef();

    useEffect(() => {
        return () => viewRef.current.style.opacity = 0;
    }, [])

    return(
        <>
            <div ref={viewRef} className="preloader">
                {/* <div className="preloader__image_animate"></div> */}
                <div className='preloader-logo' >
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div> 
            </div>
        </>
    );
}