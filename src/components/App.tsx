import { NavBar } from "./NavBar/NavBar";
import { Hero } from "./Hero/Hero";
import { Plans } from "./Plans/Plans";
import { Tools } from "./Tools/Tools";
import { Proccessing } from "./Processing/Processing";
import { PlansByBusiness } from "./PlansByBusiness/PlansByBusiness";
import { Solutions } from "./Solutions/Solutions";
import { Faq } from "./FAQ/Faq";
import { FinalSection } from "./FinalSection/FinalSection";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="py-6 lg:py-20">
        <Hero />
        <Plans />
        <Tools />
        <Proccessing />
        <PlansByBusiness />
        <Solutions />
        <Faq />
        <FinalSection />
      </main>
      <Footer />
    </>
  )
}

export default App
