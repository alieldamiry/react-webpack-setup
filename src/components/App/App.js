import React, { useState } from 'react';
import Heading from '../Heading/Heading';
import classes from './App.module.scss';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={classes.wrapper}>
            <Heading title={"Hello World from React App"} />
            <div>
                {count}
            </div>
            <button className={classes.counterBtn} onClick={() => setCount(count + 1)}>+</button>
            <button className={classes.counterBtn} onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default App;