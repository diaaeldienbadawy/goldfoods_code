import { BrowserRouter, Routes } from "react-router-dom";
import PageContent from "./Components/Layout/PageContent";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <NavBar/>
        <div className="h-100">
          <PageContent/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
