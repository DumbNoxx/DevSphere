import { useEffect, useState } from "react";
import { Divider } from "./components/Divider";
import { Footer } from "./components/Footer";
import { FooterContacts } from "./components/FooterContacts";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Spider } from "./components/Spider";

export const App = () => {
  document.body.style.overflowX = "hidden";

  document.documentElement.style.overflowX = "hidden";

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1024);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
        </div>
      </div>
    </>
  );
};
