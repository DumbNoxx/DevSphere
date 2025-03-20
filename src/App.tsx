import { Divider, Footer, FooterContacts, Profile, Projects, Skills,
  Spider, FormContactModal } from "./components/indexComponentPage";
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
