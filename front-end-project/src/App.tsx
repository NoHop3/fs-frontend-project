import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Playground from "./components/pages/Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
