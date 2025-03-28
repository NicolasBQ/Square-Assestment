import { NavBar } from "./NavBar/NavBar";
import { Hero } from "./Hero/Hero";
import { Plans } from "./Plans/Plans";
import { Tools } from "./Tools/Tools";
import { Proccessing } from "./Processing/Processing";
import { PlansByBusiness } from "./PlansByBusiness/PlansByBusiness";
import { Solutions } from "./Solutions/Solutions";
import { Faq } from "./FAQ/Faq";

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
      </main>
    </>
  )
}

export default App
