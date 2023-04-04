import { useState } from "react";
import "./App.css";
import { Description } from "./Component/Description";
import { Classic } from "./Component/Mode/Classic";

function App() {
  const [page, setPage] = useState<string>("classic");

  return (
    <div className="App">
      <Description setPage={setPage} />
      {page === "classic" && <Classic />}
      {page === "survival" && <div>Hello World</div>}
    </div>
  );
}

export default App;
