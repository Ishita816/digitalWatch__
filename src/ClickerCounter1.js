
import {useRef} from 'react';
import "./ClickerCounter1.css"; // Import the CSS file

// import ClickerCounter from {useRef} ;
const ClickerCounter1 = () =>{
    const countRef=useRef(0);
    const displayRef=useRef(null);

    const handleClick = ()=>{
        countRef.current -=1;
        displayRef.current.innerText = countRef.current ;

    };

    return (
        <div>
            <h1 ref={displayRef}>0</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ClickerCounter1;