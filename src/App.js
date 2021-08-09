import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => setCount(0);

  const double = () => {
    setCount((previousCount) => previousCount * 2);
  };

  const devide = () => {
    count % 3 === 0 ? setCount(previousCount => previousCount / 3) : setCount(previousCount => previousCount)
  }

  return (
    <>
      <div> count : {count} </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={double}>×2</button>
      </div>
      <div>
        <button onClick={devide}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
