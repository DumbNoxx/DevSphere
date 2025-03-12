import { Divider } from "./components/Divider";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <>
      <div>
        <div>
          <Profile />
        </div>
        <Divider />
        <div>
          <Projects />
        </div>
        <Divider />
        <div>
          <Skills />
        </div>
      </div>
    </>
  );
};
