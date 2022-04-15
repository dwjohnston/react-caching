import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export type TimerProps = {
};



export const Timer = (props: TimerProps) => {
    const { } = props;

    const [time, setTime] = useState(0);


    useInterval(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            {time}
        </div>
    );
};
