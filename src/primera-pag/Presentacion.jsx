 export default function Presentacion() {
  return (  
      <div className="fondo">
        <h1 className="sombreado" >
          Buenas, soy Santy y este es mi intento de página
        </h1>
        <br />
        <h2 className="sombreado">
          Soy Técnico Electrónico (se supone) y estudiante de Nutrición
        </h2>
        <h4 className="sombreado" style={{ maxWidth: '70%' }}>
          Quise hacer este curso porque en la secundaria tuve un poco de
          programación y porque me fue mal al principio no le di bola, pero al
          estar todo el día en la PC me llamó la atención y además tengo amigos y
          conocidos que se dedican a esto
        </h4>
        <br />
        <p className="sombreado">Toca en las imágenes y fijate qué pasa</p>
        <br />
        <div style={{display:'flex', justifyContent:'center'}}>
        <a href="https://www.twitch.tv/knd_pala" target="_blank" rel="noreferrer" style={{width: '200px', height: '200px'}}>
          <img
            src="chico bestia parlante.gif"
            alt="twitch"
            style={{width: '200px', height: '200px', marginRight:'5px', borderWidth:'1px'}}
          />
        </a>
        <a href="https://www.instagram.com/saantypalacios/" target="_blank" rel="noreferrer">
          <img
            src="buu aburrido.gif"
            alt="instagram"
            style={{ width: '200px', height: '200px', marginLeft:'5px', borderWidth:'1px'}}
          />
        </a>
        </div>
      </div>
  );
}
