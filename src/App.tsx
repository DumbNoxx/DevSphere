import { Profile } from "./components/Profile";
import inicio from "./assets/styles/Profile.module.css";

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
