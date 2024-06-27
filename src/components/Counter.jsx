import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('*****CALLED EVERY TIME*****');
    });

    useEffect(() => {
        console.log('*****CALLED EVERY ONE TIME*****');

        return () => {
            alert('Unmonted');
        };
    }, []);

    return <>
        <button onClick={() => setCount((count) => ++count)}>Clicked: {count} times</button>
    </>
}

export default Counter;