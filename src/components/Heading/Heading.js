import React from 'react';
import classes from './Heading.modules.scss';

const Heading = ({ title }) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.Heading}>{title}</h1>
        </div>
    )
}

export default Heading
