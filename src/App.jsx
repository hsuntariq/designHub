import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Color from "./pages/ColorGenerator";
import GradientGenerator from "./pages/GradientGenerator";
import PaletteGenerator from "./components/Hero";
import PalettePage from "./pages/PalletPage";
import GradientMaker from "./pages/GradientMaker";
import Lorem from "./pages/Lorem";
import Footer from "./components/Footer";
import TypographyScale from "./pages/TypographyScale";
import ColorPaletteGenerator from "./pages/ColorPaletteGenerator";
import SpacingScaleGenerator from "./pages/SpacingScaleGenerator";
import CSSGradientGenerator from "./pages/CSSGradientGenerator";
import ComponentShowcase from "./pages/ComponentShowcase";
import DesignSystemBuilder from "./pages/DesignSystemBuilder";
import DocumentationPage from "./pages/DocumentationPage";
import AllToolsPage from "./pages/AllToolsPage";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-generator" element={<Color />} />
        <Route path="/gradient-generator" element={<GradientGenerator />} />
        <Route path="/palette-generator" element={<PalettePage />} />
        <Route path="/gradient-maker" element={<GradientMaker />} />
        <Route path="/lorem-generator" element={<GradientMaker />} />
        <Route path="/para-generator" element={<Lorem />} />
        <Route path="/typography-scale" element={<TypographyScale />} />
        <Route
          path="/color-palette-generator"
          element={<ColorPaletteGenerator />}
        />
        <Route
          path="/spacing-scale-generator"
          element={<SpacingScaleGenerator />}
        />
        <Route
          path="/css-gradient-generator"
          element={<CSSGradientGenerator />}
        />
        <Route path="/component-showcase" element={<ComponentShowcase />} />
        <Route
          path="/design-system-builder"
          element={<DesignSystemBuilder />}
        />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/all-tools" element={<AllToolsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {/* <Footer /> */}
      <Footer />
    </Router>
  );
};

export default App;
