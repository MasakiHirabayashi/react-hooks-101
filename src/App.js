import { useState } from "react";

const App = (props) => {

  const [state, setState] = useState(props);
  const {name, price} = state

  const plus = () => setState({...state, price: state.price + 1})
  const minus = () => setState({...state, price: state.price - 1})
  const reset = () => setState(props)

  console.log(state)

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={plus}> +1 </button>
      <button onClick={minus}> -1 </button>
      <button onClick={reset}> reset </button>
      <input value={ name } onChange={(e) => setState({...state, name: e.target.value})}></input>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
