import { NavBar } from "./NavBar/NavBar";
import { Hero } from "./Hero/Hero";

function App() {
  return (
    <>
      <NavBar />
      <main className="p-8 lg:px-28 lg:py-20">
        <Hero />
      </main>
    </>
  )
}

export default App
