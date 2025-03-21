import { formHook } from "../../hooks/formHook";

export const FormContactModal = () => {
  const { formData, handleChange, handleSubmit, isSubmitting, errorMessage } =
    formHook();
  return (
    <>
      <div
        className="bg-zinc-950 w-80 mx-auto my-auto border border-stone-800 rounded-lg p-4
      "
      >
        <h3 className="text-3xl text-white pt-3 pb-3">Contactame</h3>
        <p className="mb-12 text-stone-400">
          Rellene el formulario para ponerse en contacto conmigo.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-1.5">
          <span className="flex flex-col text-white">
            Nombre
            <span className="text-[0.6rem] text-stone-400">
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
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65
             placeholder-stone-400"
            required
          />
          <span className="text-white mb-2">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400"
            placeholder="tu.email@example.com"
            id="emailForm"
            required
          />
          <span className="flex flex-col mb-3 text-white">
            Empresa
            <span className="text-[0.6rem] text-stone-400">
              Si no tienes empresa puedes dejar este campo vacio.
            </span>
          </span>
          <input
            type="text"
            name="enterprice"
            value={formData.enterprice}
            onChange={handleChange}
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400"
            placeholder="Nombre de la empresa"
            id="empresaForm"
          />
          <span className="text-white">Mensaje</span>
          <textarea
            name="mensaje"
            placeholder="Tu mensaje (max 350 characteres)"
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400 min-h-30 max-h-150"
            maxLength={350}
            id="mensajeForm"
          />
          <span className="text-xs text-stone-400">
            <input
              type="checkbox"
              name="checkbutton"
              id="checkbuttonForm"
              className="mr-2 checked:border-transparent"
            />
            ¿Quieres recibir notificaciones sobre alguna publicacion hecha en mi
            linkedIn?
          </span>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-60 text-black mx-auto border py-2 rounded-lg bg-white
            hover:bg-stone-200 transition-colos duration-400 cursor-pointer"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};
