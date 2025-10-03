import React, { useState } from 'react';

const CalculadoraRED = ({ peso, setPeso, altura, setAltura }) => {
  const [sexo, setSexo] = useState('hombre');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('1.30');
  const [resultado, setResultado] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  function redondearPersonalizado(num) {
    const centenas = Math.floor(num / 100) * 100;
    const resto = num - centenas;

    if (resto < 25) {
      return centenas;
    } else if (resto < 75) {
      return centenas + 50;
    } else {
      return centenas + 100;
    }
  }

  const calcularRED = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) * 100; // Convert meters to cm
    const edadNum = parseInt(edad);
    const actividadNum = parseFloat(actividad);

    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(edadNum)) {
      setResultado("Por favor, completa todos los campos con valores válidos.");
      return;
    }

    let GEB = 0;
    if (sexo === 'hombre') {
      GEB = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) + 5;
    } else {
      GEB = (10 * pesoNum) + (6.25 * alturaNum) - (5 * edadNum) - 161;
    }

    const RED = GEB * actividadNum;
    const redondeado = redondearPersonalizado(RED);

    setResultado(`Tu requerimiento energético diario es de aproximadamente ${redondeado} kcal.`);
  };

  const activityDescriptions = {
    Sedentario: "Si estas internado, postrado o algo por el estilo o si no tocas pasto ni de casualidad y no con suerte te levantas para ir al baño lamento decirte que serias sedentario.",
    Pocoactivo: "Si estudias o trabajas sentado en lugares cerrados y soles realizar actividad física como caminar, andar en bici o realizas deporte de 1 a 3 veces por semana serias ligero.",
    Activo: "Si tu trabajo es un poco mas movido (como transportar cosas, limpieza o similares) pero sigue siendo en lugares cerrados y soles realizar actividad física como caminar, andar en bici o realizas deporte de 3 a 5 veces por semana .",
    Muyactivo: "Actividad física intensa, como entrenamiento regular, deportes competitivos o trabajo físico exigente (6-7 días por semana).",
  };  

  const activityLabels = {
    Sedentario: "Sedentario",
    Pocoactivo: "Poco activo",
    Activo: "Activo",
    Muyactivo: "Muy activo",
  };

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="fondo3 w-full sm:w-1/2 p-5">
      <div style={{ textAlign: 'center' }}>
        <h3 className='sombreado' style={{ textAlign: 'center' }}>
          Calculadora de RED
        </h3>
      </div>

      <label className='sombreado'>Sexo:</label>
      <select
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
        className='border border-gray-800 rounded-4xl px-3 ml-1'
      >
        <option value="hombre" className='sombreado'>Hombre</option>
        <option value="mujer" className='sombreado'>Mujer</option>
      </select>
      <br /><br />

      <label className='sombreado'>Peso (kg):</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        style={{ width: "100px" }}
        className='border border-gray-800 rounded-4xl px-3 ml-1'
      />
      <br /><br />

      <label className='sombreado'>Altura (cm):</label>
      <input
        type="number"
        value={altura ? parseFloat(altura) * 100 : ''} // Convert meters to cm
        onChange={(e) => setAltura(e.target.value / 100)} // Convert cm back to meters
        style={{ width: "80px" }}
        className='border border-gray-800 rounded-4xl px-3 ml-1'
      />
      <br /><br />

      <label className='sombreado'>Edad (años):</label>
      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        style={{ width: "80px" }}
        className='border border-gray-800 rounded-4xl px-3 ml-1'
      />
      <br /><br />

      <label className='sombreado'>Actividad física:</label>
      <select
        value={actividad}
        onChange={(e) => setActividad(e.target.value)}
        className='border border-gray-800 rounded-4xl px-3 ml-1'
      >
        <option value="1.3" className='sombreado'>Sedentario</option>
        <option value="1.5" className='sombreado'>Poco Activo</option>
        <option value="1.75" className='sombreado'>Activo</option>
        <option value="2" className='sombreado'>Muy Activo</option>
      </select>
      <br />
      Si no sabes bien cual sería tu actividad física clickea acá
      <label htmlFor="modal-activ" className="btn btn-circle btn-xs bg-red-600">!</label>

      <input type="checkbox" id="modal-activ" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4 border-2 border-gray-800 rounded-lg p-2">Elige tu nivel de actividad física</h3>

          <div className="flex gap-3 w-full">
            {['Sedentario', 'Pocoactivo', 'Activo', 'Muyactivo'].map((activity) => (
              <label
                key={activity}
                className={`btn btn-outline w-50px justify-start ${selectedActivity === activity ? 'btn-active' : ''}`}
                onClick={() => handleActivityClick(activity)}
              >
                {activityLabels[activity]}
              </label>
            ))}
          </div>

          {selectedActivity && (
            <div className="mt-4 text-sm border-2 rounded-lg p-2">
              <p>{activityDescriptions[selectedActivity]}</p>
            </div>
          )}

          <div className="modal-action">
            <label htmlFor="modal-activ" className="btn">Cerrar</label>
          </div>
        </div>
      </div>

      <br /><br />

      <button onClick={calcularRED}>
        <p className="btn">| apreta aca |</p>
      </button>

      <p className='sombreado'>{resultado}</p>
    </div>
  );
};

export default CalculadoraRED;