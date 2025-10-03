import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Mail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(
        "service_pala", // 👈 de EmailJS
        "template_0m6e3c9", // 👈 de EmailJS
        form.current,
        "MPypKpU5PH8cjjJi-" // 👈 de EmailJS
      )
      .then(
        () => {
          alert("✅ Gracias por coparte");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error al enviar: " + error.text);
        }
      );
  };

  return (
    <div className="fondo2">
      <p className="sombreado">
        Si te sirvió o al menos no se rompió toda la página hacemelo saber
        llenando las cositas de abajo, copate no cuesta nada
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            minLength="3"
            pattern=".*\S+.*"
            className="w-full md:w-1/2 border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            name="origin"
            placeholder="¿Me conoces? ¿De dónde?"
            required
            minLength="3"
            pattern=".*\S+.*"
            className="w-full md:w-1/2 border border-gray-800 rounded-4xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <textarea
          name="message"
          placeholder="Contame cuanto te dio el RED y lo que quieras decirme"
          rows="5"
          required
          minLength="10"
          pattern=".*\S+.*"
          className="w-full border border-gray-800 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none bg-white text-gray-900"
        />

        <button
          type="submit"
          className="default-button w-full md:w-1/3 rounded-4xl py-3 bg-gray-900 text-white hover:bg-gray-800 transition mb-5"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
