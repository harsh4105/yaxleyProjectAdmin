import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import CountryInfo from "./pages/CountryInfo";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import USAPage from "./pages/UsaCountry";
import TestPrep from './pages/TestPrep';
import Dashboard from './components/Dashboard/DashboardMain/DashboardMain';


function App() {
  return (
    <>
<Dashboard/>
      
    {/* <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/services" element={<Services />} />
         <Route path="/countryInfo" element={<CountryInfo />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/testprep" element={<TestPrep />} />
         <Route path="/events" element={<Events />} />
         <Route path="/usacountry" element={<USAPage />} />
      </Routes>
      <Footer />
   </BrowserRouter> */}
   </>

  );
}

export default App;
