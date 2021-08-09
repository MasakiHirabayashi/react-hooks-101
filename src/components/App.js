import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";

import EventForm from "./EventForm";
import reducer from "../reducers/";
import Events from "./Events";


const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
