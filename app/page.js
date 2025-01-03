import HoverMenu from "./components/HoverMenu";
import AISolutions from "./sections/AISolutions";
import Documentation from "./sections/Documentation";
import ExperienceKaispe from "./sections/ExperienceKaispe";
import FeatureFunctionalities from "./sections/FeatureFunctionalities";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import IndustriesWeServe from "./sections/IndustriesWeServe";
import InsightfulAnalytics from "./sections/InsightfulAnalytics";
import IntegrateFaster from "./sections/IntegrateFaster";
import Integration from "./sections/Integration";
import MarketPlaces from "./sections/MarketPlaces";
import ProcurementWorkflow from "./sections/ProcurementWorkflow";
import TransformTheWay from "./sections/TransformTheWay";
import VendorOnboarding from "./sections/VendorOnboarding";
import VendorSelfService from "./sections/VendorSelfService";
import WhyChooseKaispe from "./sections/WhyChooseKaispe";

import IconOne from "/public/header-icon-one.png";
import IconTwo from "/public/header-icon-two.png";
import IconThree from "/public/header-icon-three.png";
import IconFour from "/public/header-icon-four.png";
const solutionsData = [
  {
    icon: { src: IconOne, width: 25, height: 25 },
    linkName: "Features",
    linkDescription: "Simplified Procurement and Collaboration",
  },
  {
    icon: { src: IconTwo, width: 28, height: 28 },
    linkName: "Capabilities",
    linkDescription: "Efficient, Collaborative, Scalable Solutions",
  },
  {
    icon: { src: IconThree, width: 26, height: 27.53 },
    linkName: "Insights",
    linkDescription: "Actionable Data, Smarter Decisions",
  },
  {
    icon: { src: IconFour, width: 33, height: 35 },
    linkName: "AI Solutions",
    linkDescription: "Intelligent, Scalable, Data-Driven Insights",
  },
];

export default function Home() {
  return (
    <>
      <HoverMenu data={solutionsData} />
      {/* <Header />
      <Hero />
      <FeatureFunctionalities />
      <VendorSelfService />
      <VendorOnboarding />
      <IndustriesWeServe />
      <AISolutions />
      <Integration />
      <IntegrateFaster />
      <ProcurementWorkflow />
      <InsightfulAnalytics />
      <WhyChooseKaispe />
      <TransformTheWay />
      <Documentation />
      <MarketPlaces />
      <ExperienceKaispe />
      <Footer /> */}
    </>
  );
}
