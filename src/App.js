import { BrowserRouter } from "react-router-dom";
import PageContent from "./Components/Layout/PageContent";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import OceanBackground from "./Components/Shared/OceanBackground";
import CookieConsent from "./Components/Shared/CookieConsent";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App" id="app">
        <OceanBackground />
        <BrowserRouter>
          <NavBar/>
          <div className="h-100">
            <PageContent/>
          </div>
          <Footer/>
          <CookieConsent/>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
