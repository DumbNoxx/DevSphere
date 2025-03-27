import {
  Divider,
  Footer,
  FooterContacts,
  Profile,
  Projects,
  Skills,
  Spider,
  FormContactModal,
  Modal,
} from "./components/indexComponentPage";
import { isLargeScreenHook } from "./hooks/isLargeScreen";
import { openModall } from "./hooks/openModal";

export const App = () => {
  document.body.style.overflowX = "hidden";

  document.documentElement.style.overflowX = "hidden";

  const { isLargeScreen } = isLargeScreenHook();
  const { isModalOpen, closeModal, openModal } = openModall();

  return (
    <>
        {isLargeScreen && <Spider />}
        <div className="relative z-10">
          <Profile />
          <Divider />
          <Projects />
          <Divider />
          <Skills />
          <Divider />
          <FooterContacts openModal={openModal} />
          <Divider />
          <Footer />
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <FormContactModal />
            </Modal>
          )}
        </div>
    </>
  );
};
