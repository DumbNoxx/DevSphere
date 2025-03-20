import { formHook } from "../hooks/formHook";

export const FormContactModal = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, errorMessage} = formHook();
  return (
    <>
      <div className="bg-stone-700 w-80 mx-auto rounded-lg p-4">
        <h3 className="text-3xl text-white border">
          Contactame
          </h3>
        <p>Rellene el formulario para ponerse en contacto conmigo.</p>
        <form onSubmit={handleSubmit} 
        className="flex flex-col">
          <span className="flex flex-col">
            Nombre
            <span className="text-xs">
              Para mayor gestion puedes colocar tu nombre completo.
            </span>
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            id="nameForm"
            required
          />
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu.email@example.com"
            id="emailForm"
            required
          />
          <span className="flex flex-col">
            Empresa
            <span className="text-xs">
              Si no tienes empresa puedes dejar este campo vacio.
            </span>
          </span>
          <input
            type="text"
            name="empresa"
            value={formData.enterprice}
            onChange={handleChange}
            placeholder="Nombre de la empresa"
            id="empresaForm"
          />
          <span>Mensaje</span>
          <input
            type="text"
            name="mensaje"
            placeholder="Tu mensaje"
            id="mensajeForm"
          />
          <span>
            <input
              type="checkbox"
              name="checkbutton"
              id="checkbuttonForm"
              className="mr-2"
            />
            ¿Quieres recibir notificaciones sobre alguna publicacion hecha en mi
            linkedIn?
          </span>
          <button type="submit"  disabled={isSubmitting} className="bg-blue-800">
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};
