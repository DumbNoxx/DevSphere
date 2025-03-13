import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";
import { FooterContacts } from "./components/FooterContacts";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <>
      <div>
        <Profile />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <FooterContacts />
        <Divider />
        <Footer />
      </div>
    </>
  );
};
