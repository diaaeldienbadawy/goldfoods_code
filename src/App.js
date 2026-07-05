import { BrowserRouter } from "react-router-dom";
import PageContent from "./Components/Layout/PageContent";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App" id="app">
        <BrowserRouter>
          <NavBar/>
          <div className="h-100">
            <PageContent/>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
