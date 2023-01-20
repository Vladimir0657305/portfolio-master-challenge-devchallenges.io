
import { lazy, Suspense } from 'react';
// import App from './App';
import './Ap.scss';

const App = lazy(() => import('./App'));

export default function Ap() {
    return(
        <>
        {/* {site} */}
        
            <Suspense fallback={<h1 className='start'>Loading...</h1>}>
                <App />
            </Suspense>
        </>
    );

}