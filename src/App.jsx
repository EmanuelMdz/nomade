import "./App.css";
import { Information } from "./components/information";
import { Sectionreseñas } from "./components/sectionreseñas/sectionreseñas";
import { Nuestrostrabajos } from "./components/section-nuestrostrabajos/nuestrostrabajos";
import { Footer } from "./components/footer/footer";
import { Sobrenosotros } from "./components/section-sobrenosotros/sobrenosotros";
import { Servicios } from "./components/servicios/servicios";

function App() {
  return (
    <>
      <Information />
      <Sobrenosotros />
      <Nuestrostrabajos />
      <Servicios />
      <Sectionreseñas />
      <Footer />
    </>
  );
}

export default App;
