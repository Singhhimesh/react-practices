import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  mutiply,
} from "../store/counter/counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Increment By Amount"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>

        <button
          aria-label="Multiply By Amount"
          onClick={() => dispatch(mutiply(2))}
        >
          Multiply by 2
        </button>
      </div>
    </div>
  );
};

export default Counter;
