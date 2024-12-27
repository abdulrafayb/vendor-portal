import FeatureFunctionalities from "./sections/FeatureFunctionalities";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import VendorOnboarding from "./sections/VendorOnboarding";
import VendorSelfService from "./sections/VendorSelfService";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeatureFunctionalities />
      <VendorSelfService />
      <VendorOnboarding />
      <Footer />
    </div>
  );
}
