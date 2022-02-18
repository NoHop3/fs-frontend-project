import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Playground from "./components/pages/Playground";
import SingleCard from "./components/sections/playground/SingleCard";
import importTemplate from "./hooks/useImports";
import "./styles/Header.css";
import "./styles/Footer.css";

function App() {
  const { BrowserRouter, Routes, Route } = importTemplate();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/details/:cardId' element={<SingleCard />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
