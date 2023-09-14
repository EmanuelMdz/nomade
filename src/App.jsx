import "./App.css";
import { Information } from "./components/information";
import { Sectionreseñas } from "./components/sectionreseñas/sectionreseñas";
import { Nuestrostrabajos } from "./components/section-nuestrostrabajos/nuestrostrabajos";
import { Footer } from "./components/footer/footer";
import { Sobrenosotros } from "./components/section-sobrenosotros/sobrenosotros";

function App() {
  return (
    <>
      <Information />
      <Sobrenosotros />
      <Nuestrostrabajos />
      <Sectionreseñas />
      <Footer />
    </>
  );
}

export default App;
