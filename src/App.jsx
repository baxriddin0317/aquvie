import Content from "./pages/Content";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </>
  );
}

export default App;
