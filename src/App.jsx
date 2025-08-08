import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route } from 'react-router-dom'

// Page components
import Home from './pages/Home'
import Services from './pages/Services'
import ElectriciteGenerale from './pages/ElectriciteGenerale'
import BornesRecharge from './pages/BornesRecharge'
import PanneauxSolaires from './pages/PanneauxSolaires'
import Realisations from './pages/Realisations'
import Blog from './pages/Blog'
import SimulateurDevis from './pages/SimulateurDevis'
import Contact from './pages/Contact'

/**
 * The main application component defines the persistent layout (navigation
 * and footer) and configures the client‑side routes.  Each route renders
 * a dedicated page component.  The ScrollToTop component ensures that
 * navigation resets the scroll position to the top of the page.
 */
function App() {
  return (
    <>
      <Navbar />
      {/* Scroll restoration on route changes */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/electricite-generale" element={<ElectriciteGenerale />} />
        <Route path="/services/bornes-recharge" element={<BornesRecharge />} />
        <Route path="/services/panneaux-solaires" element={<PanneauxSolaires />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/simulateur-devis" element={<SimulateurDevis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App