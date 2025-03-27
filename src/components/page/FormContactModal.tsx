import { formHook } from "@/hooks/formHook";

export const FormContactModal = () => {
  const {
    formData,
    handleChange,
    handleChangeTextArea,
    handleSubmit,
    isSubmitting,
    errorMessage,
  } = formHook();
  return (
    <>
      <div
        className="bg-zinc-950 w-80 mx-auto my-auto border border-stone-800 rounded-lg p-4
        sm:w-100 md:w-110 lg:w-[31rem] min-h-fit"
      >
        <h2
          className="text-3xl lg:text-3xl text-white
          sm:text-4xl my-auto"
        >
          Contactame
        </h2>
        <h3 className="mb-6 text-stone-400 sm:w-80 my-auto">
          Rellene el formulario para ponerse en contacto conmigo.
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-1.5">
          <label
            htmlFor="name"
            className="flex flex-col text-white
            md:text-base my-auto"
          >
            Nombre
            <span className="text-[0.6rem] md:text-[0.8rem] text-stone-400 my-auto">
              Para mayor gestion puedes colocar tu nombre completo.
            </span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            id="nameForm"
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65
             placeholder-stone-400 sm:w-85 md:w-95 lg:w-110"
            required
          />
          <label
            htmlFor="email"
            className="text-white mb-3 md:text-xl lg:text-base my-auto"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400 sm:w-85 md:w-95 lg:w-110"
            placeholder="tu.email@example.com"
            id="emailForm"
            required
          />
          <label
            htmlFor="enterprice"
            className="flex flex-col mb-3 text-white
            md:text-xl lg:text-base my-auto"
          >
            Empresa
            <span className="text-[0.6rem] text-stone-400 md:text-[0.8rem]">
              Si no tienes empresa puedes dejar este campo vacio.
            </span>
          </label>
          <input
            type="text"
            name="enterprice"
            value={formData.enterprice}
            onChange={handleChange}
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400 sm:w-85 md:w-95 lg:w-110"
            placeholder="Nombre de la empresa"
            id="empresaForm"
          />
          <label
            htmlFor="message"
            className="text-white mb-3 md:text-xl lg:text-base"
          >
            Mensaje
          </label>
          <textarea
            name="message"
            placeholder="Tu mensaje (max 350 characteres)"
            className="border border-stone-800 focus:border-white rounded-lg py-1.5 px-3 ml-1 w-65 -mt-2
             placeholder-stone-400 min-h-30 resize-y sm:w-85 md:w-95 lg:w-110"
            maxLength={350}
            value={formData.message}
            onChange={handleChangeTextArea}
            id="mensajeForm"
          />
          <label
            htmlFor="checkbox"
            className="text-xs md:text-[0.75rem] text-stone-400"
          >
            <input
              type="checkbox"
              name="checkbutton"
              id="checkbuttonForm"
              checked={formData.checkbutton}
              onChange={handleChange}
              className="mr-2 checked:border-transparent"
            />
            ¿Quieres recibir notificaciones sobre alguna publicacion hecha en mi
            linkedIn?
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-60 text-black mx-auto border py-2 rounded-lg bg-white
            hover:bg-stone-200 transition-colos duration-400 cursor-pointer
            md:text-xl"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};
