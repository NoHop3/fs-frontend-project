import Home from "./components/pages/Home";
import Playground from "./components/pages/Playground";
import SingleCard from "./components/sections/playground/SingleCard";
import importTemplate from "./hooks/useImports";

function App() {
  const { BrowserRouter, Routes, Route } = importTemplate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
        <Route path={`/details`} element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
