import { useEffect, useRef, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    let initialCounter = useRef(0);

    useEffect(() => {
        initialCounter.current = initialCounter.current + 1;

        console.log(`the value of initialCounter is:${initialCounter.current}`);
    });

    return <>
    <button onClick={() => setCounter(counter => ++counter)} className="btn btn-outline-primary">Button clicked {counter} times</button>
    </>;
}

export default Counter;