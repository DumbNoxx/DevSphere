import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";
import { FooterContacts } from "./components/FooterContacts";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Spider } from "./components/Spider";
import { FormContactModal } from "./components/FormContactModal";
import { isLargeScreenHook } from "./hooks/isLargeScreen";

export const App = () => {
  document.body.style.overflowX = "hidden";

  document.documentElement.style.overflowX = "hidden";
  const { isLargeScreen } = isLargeScreenHook();

  return (
    <>
      <div>
        {isLargeScreen && <Spider />}

        <div className="relative z-10">
          <Profile />
          <Divider />
          <Projects />
          <Divider />
          <Skills />
          <Divider />
          <FooterContacts />
          <Divider />
          <Footer />
          <Divider />
          <FormContactModal />
        </div>
      </div>
    </>
  );
};
