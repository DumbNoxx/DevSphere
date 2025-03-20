import { skillsHook } from "../../hooks/skillsHook";

const Array = ({ nombre }: { nombre: string }) => {
  return (
    <>
      
      <span className="mt-1 ml-0.5 pr-1 text-md md:text-lg">{nombre}</span>
    </>
  );
};

export const Skills = () => {
  const [array] = skillsHook();
  array.map((item) => (
    console.log(item.colors)));
  return (
    <>
      <div className="p-6">
        <h2 className="text-4xl text-white md:text-5xl lg:text-center">
          Habilidades
          </h2>
        <p className="text-xl text-stone-400 md:text-2xl lg:text-center lg:mb-10">Tecnologías y herramientas que domino.</p>
        <div className="grid grid-cols-3 space-x-3 -mr-2 -pl-3 sm:grid-cols-4
         sm:w-154 md:grid-cols-2 md:w-180 lg:m-auto lg:grid-cols-4 
         ">
          {array.map((item) => (
            <div className={`mt-5 border border-stone-800 flex rounded-lg p-1
            sm:mt-4 hover:scale-105 transition-transform duration-400 cursor-pointer ${item.colors}
             ${item.textColor}`}
            key={item.id}>
            <img src={item.image} alt="" 
            className="w-5 mt-[0.1rem] mr-0.5"/> <Array nombre={item.nombre}></Array> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
