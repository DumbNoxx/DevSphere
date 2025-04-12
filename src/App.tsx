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
} from "@components";
import { useIsLargeScreenHook, useOpenModal } from "@hooks";

export const App = () => {
  document.body.style.overflowX = "hidden";

  document.documentElement.style.overflowX = "hidden";

  const isLargeScreen = useIsLargeScreenHook();
  const { isModalOpen, closeModal, openModal } = useOpenModal();

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
