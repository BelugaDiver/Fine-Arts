import * as React from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div class="exteriorCard">
      <div class="interiorCard">
        <div className="interiorCircle">
          <div className="recepientName">Justyna, baby</div>
          <div className="recepientQuestion">Fine Arts?</div>
          <div>
            <Button className="buttonYes">Yes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
