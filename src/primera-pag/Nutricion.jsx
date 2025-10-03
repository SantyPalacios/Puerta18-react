import { useState } from "react";
import IMC from "./IMC";
import RED from "./RED";

function Nutricion() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return (
    <>
      <div className="fondo2">
        <h1 className="sombreado">Ahora un intento de algo de nutri con js</h1>
        <h4 className="sombreado">
          Por ahora solo tuve nutri normal, o sea estamos estudiando casos en los
          que la gente esta en un peso (mal llamado) normal o dentro de estos
          valores, entonces sabiendo esto aca abajo en el primer apartado vas a
          poder calcular tu IMC (indice de masa corporal) y si este da entre 18.5
          y 24.9 podes seguir con el apartado de al lado que es para calcular el
          RED (requerimiento energetico diario)
        </h4>
      </div>
      <section className="flex flex-col sm:flex-row sm:justify-between mx-auto max-w-[80%] px-0 my-5 gap-4">
        <IMC peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} />
        <RED peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} />
      </section>
    </>
  );
}

export default Nutricion;