import { useSkillsHook } from "@hooks";
import { Array } from "./Array";
import { back } from "@assets";

export const BackendSkills = () => {
  const { backend } = useSkillsHook();
  return (
    <>
      <article>
        <h4 className="text-xl mt-8 md:mt-0 text-stone-200 md:text-2xl text-center lg:mb-2">
          Backend Stack
        </h4>
        <figure>
          <img src={back} alt="Backend" className="mx-auto w-24 mb-8" />
        </figure>
        <div
          className="grid grid-cols-3 w-80 space-x-3 -mr-2 -pl-3 sm:grid-cols-4
         sm:w-154 md:grid-cols-2 md:w-180 lg:m-auto lg:grid-cols-3 
         "
        >
          {backend.map((item) => (
            <div
              className={`mt-5 border border-stone-800 flex rounded-lg p-1
                sm:mt-4 hover:scale-105 transition-transform duration-400 cursor-pointer ${item.colors}
             ${item.textColor}`}
              key={item.id}
            >
              <figure>
                <img
                  src={item.image}
                  alt=""
                  className="w-5 mt-[0.1rem] md:mt-[0.4rem] mr-0.5"
                />{" "}
              </figure>
              <Array nombre={item.name}></Array>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};
