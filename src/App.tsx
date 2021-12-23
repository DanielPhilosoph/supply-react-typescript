import "./App.css";
import AddItem from "./core/AddItem";
import SubmitButton from "./core/SubmitButton";
import SupplyList from "./core/SupplyList";
import WorkerForm from "./core/WorkerForm";
import React, { useRef } from "react";

function App() {
  const button = useRef<HTMLButtonElement>(null);

  return (
    <div className="App">
      <WorkerForm buttonRef={button} />
      <SupplyList />
      <div className="submitButtonDiv">
        <div className="d-grid gap-2">
          <SubmitButton ref={button} />
        </div>
      </div>
      <AddItem />
    </div>
  );
}

export default App;
