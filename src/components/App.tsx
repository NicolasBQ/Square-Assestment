import { NavBar } from "./NavBar/NavBar";
import { Hero } from "./Hero/Hero";
import { Plans } from "./Plans/Plans";
import { Tools } from "./Tools/Tools";

function App() {
  return (
    <>
      <NavBar />
      <main className="p-6 lg:px-20 lg:py-20 xl:px-24 2xl:px-48">
        <Hero />
        <Plans />
        <Tools />
      </main>
    </>
  )
}

export default App
