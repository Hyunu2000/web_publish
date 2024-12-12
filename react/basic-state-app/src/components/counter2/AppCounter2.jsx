import { useState } from 'react';
import Counter2 from './Counter2.jsx';
import './Counter2.css';

export default function AppCounter2() {
    const [totalNumber, setTotalNumber] = useState(0);

    const handleClick = (number, type) => {
        if(number < 10 && type === '+') {
            setTotalNumber(totalNumber + 1);
        } else if(number > 0 && type === '-') {
            setTotalNumber(totalNumber - 1);
        }
    }
    // const handleClick = (type) => {
    //     type === '+' ? setTotalNumber(totalNumber+1) : setTotalNumber(totalNumber-1);
    // }

    return (
        <div className="counter-container">
            <Counter2 total={totalNumber} click={handleClick} />
            <Counter2 total={totalNumber} click={handleClick} />
            <Counter2 total={totalNumber} click={handleClick} />
        </div>
    );
}

