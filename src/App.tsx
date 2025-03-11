import { Profile } from "./components/Profile";
import inicio from "./assets/styles/styleComponentProfile.module.css";

export const App = () => {
  return (
    <>
      <div className={inicio["responsive-web"]}>
        <div className="inicio">
          <Profile />
        </div>
      </div>
    </>
  );
};
