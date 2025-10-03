import { useState } from "react";

export default function IMC({ peso, setPeso, altura, setAltura }) {
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      setResultado("Por favor, introduce valores válidos.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let categoria = "";

    if (imc < 18.5) {
      categoria = "Bajo peso";
    } else if (imc < 25) {
      categoria = "Podes seguir con el RED";
    } else if (imc < 29.9) {
      categoria = "Sobrepeso";
    } else {
      categoria = "Obesidad";
    }

    setResultado(`Tu IMC es ${imc.toFixed(2)} (${categoria})`);
  }

  return (
    <>
      <div className="fondo3 w-full sm:w-1/2 p-5">
        <div style={{ textAlign: "center"}}>
          <h3 className="sombreado" style={{ display: "inline-block" }}>
            Calcula tu IMC
          </h3>
        </div>
        <br />
        <h4 className="sombreado" style={{ marginRight: "17px" }}>
          Aca pone cuanto pesas (en Kg): 
        </h4> 
        <input 
          type="number" 
          id="peso" 
          name="peso" 
          step="1" 
          style={{ width: "80px" }} 
          className='border border-gray-800 rounded-4xl px-3'
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcularIMC()}
        />
        <br />
        <h4 className="sombreado mr-5" style={{marginRight:"2px"}}>
          Aca pone cuanto medis (en mtrs):
        </h4> 
        <input 
          type="number" 
          id="altura" 
          name="altura" 
          step="0.01" 
          style={{ width: "80px" }} 
          className='border border-gray-800 rounded-4xl px-3'
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calcularIMC()}
        />
        <br />
        <button onClick={calcularIMC}>
          <p className="btn">| apreta aca |</p> 
        </button>
        <br /> 
        <p className="sombreado">{resultado}</p>
      </div>
    </>
  );
}