// import React, { useState } from 'react';
// import FullScreenCounterCard from './FullScreenCounterCard';

// const CounterCard = () => {
//     const [count, setCount] = useState(0);
//     const [isFullscreen, setIsFullscreen] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false);

//     const increment = () => {
//         setCount(prevCount => prevCount + 1);
//         triggerAnimation();
//     };

//     const decrement = () => setCount(prevCount => prevCount - 1);
//     const reset = () => setCount(0);

//     const enterFullscreen = () => {
//         setIsFullscreen(true);
//         document.documentElement.requestFullscreen();
//     };

//     const exitFullscreen = () => {
//         setIsFullscreen(false);
//         if (document.fullscreenElement) {
//             document.exitFullscreen();
//         }
//     };

//     const handleScreenClick = () => {
//         if (isFullscreen) {
//             increment();
//         }
//     };

//     const triggerAnimation = () => {
//         setIsAnimating(true);
//         setTimeout(() => {
//             setIsAnimating(false);
//         }, 300); // Match the duration of the CSS animation
//     };

//     return (
//         <>
//             {isFullscreen ? (
//                 <div onClick={handleScreenClick}>
//                     <FullScreenCounterCard
//                         count={count}
//                         increment={increment}
//                         decrement={decrement}
//                         reset={reset}
//                         exitFullscreen={exitFullscreen}
//                     />
//                 </div>
//             ) : (
//                 <div className="card w-100">
//                     <div className="card-body">
//                         <h6 className="card-title d-flex justify-content-between">
//                             <span>Counter</span>
//                             {/* <span>Subhanallah</span> */}
//                             <span onClick={enterFullscreen} className='font-sm-3 btn btn-success btn-sm rounded-pill'>Full Screen <i class="bi bi-fullscreen"></i></span>
//                         </h6>
//                         <div className="d-flex justify-content-between">
//                             <button className="border-0 bg-transparent fs-4 text-danger" onClick={reset}>
//                                 <i class="bi bi-counter-clock"></i>
//                             </button>
//                             <button className="border-0 bg-transparent fs-4 text-warning" onClick={decrement}>
//                                 <i class="bi bi-dash-circle"></i>
//                             </button>
//                             <p className={`card-text w-25 align-self-center mb-0 fw-bold ${isAnimating ? 'animated-number' : ''}`}>
//                                 {count}/100
//                             </p>
//                             <button className="border-0 bg-transparent fs-4 text-success" onClick={increment}>
//                             <i class="bi bi-plus-circle"></i>
//                             </button>
                            
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default CounterCard;


import React, { useState, useEffect } from 'react';

const CounterCard = () => {
    // const [count, setCount] = useState(0);
    // const [maxCount, setMaxCount] = useState(100); // Default max count

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null && !isNaN(parseInt(savedCount, 10)) ? parseInt(savedCount, 10) : 0;
    });

    const [maxCount, setMaxCount] = useState(() => {
        const savedMaxCount = localStorage.getItem('maxCount');
        return savedMaxCount !== null && !isNaN(parseInt(savedMaxCount, 10)) ? parseInt(savedMaxCount, 10) : 100;
    });

    const [newMaxCount, setNewMaxCount] = useState(''); // Input for setting max count
    const [isAnimating, setIsAnimating] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        console.log('Restoring count and maxCount from localStorage');
        
        const savedCount = localStorage.getItem('count');
        const savedMaxCount = localStorage.getItem('maxCount');

        console.log('Saved Count:', savedCount);
        console.log('Saved Max Count:', savedMaxCount);

        if (savedCount !== null) setCount(parseInt(savedCount, 10));
        if (savedMaxCount !== null) setMaxCount(parseInt(savedMaxCount, 10));
    }, []);

    // Save count to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    // Save maxCount to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('maxCount', maxCount);
    }, [maxCount]);

    const increment = () => {
        if (count < maxCount) {
            setCount(prevCount => prevCount + 1);
            triggerAnimation();
        }
    };

    const decrement = () => {
        setCount(prevCount => Math.max(0, prevCount - 1)); // Prevent negative count
    };

    const reset = () => {
        setCount(0); // Only resets the count
        setMaxCount(100);  // Reset maxCount to the default value of 100
    };

    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300); // Match animation duration
    };

    const handleMaxCountInputChange = (event) => {
        setNewMaxCount(event.target.value); // Update input field value
    };

    const handleSetMaxCount = () => {
        const value = parseInt(newMaxCount, 10);
        if (!isNaN(value) && value > 0) {
            setMaxCount(value); // Update max count
            setNewMaxCount(''); // Clear input field
        }
    };

    return (
        <div className="card w-100">
            <div className="card-body">
                <h6 className="card-title d-flex justify-content-between">
                    <span>Counter</span>
                </h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                        <input
                            type="number"
                            className="form-control me-2"
                            value={newMaxCount}
                            onChange={handleMaxCountInputChange}
                            min="1"
                            placeholder="Set Max Count"
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSetMaxCount}
                        >
                            Set
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <p className={`fs-2 align-self-center mb-0 fw-bold ${isAnimating ? 'animated-number' : ''}`}>
                        {count}/{maxCount}
                    </p>
                    <button className="round-button btn btn-sm btn-success shadow mt-3" onClick={increment}>
                        Count
                    </button>
                    <div>
                        <button className="btn btn-danger m-2" onClick={decrement}>
                            <i className="bi bi-dash-circle"></i>
                        </button>
                        <button className="btn btn-secondary m-2" onClick={reset}>
                            <i className="bi bi-arrow-counterclockwise"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterCard;
