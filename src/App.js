import { BrowserRouter } from "react-router-dom";
import PageContent from "./Components/Layout/PageContent";
import NavBar from "./Components/Layout/NavBar";
import Footer from "./Components/Layout/Footer";
import OceanBackground from "./Components/Shared/OceanBackground";
import CookieConsent from "./Components/Shared/CookieConsent";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
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
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
