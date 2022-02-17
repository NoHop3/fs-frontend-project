import { useSelector } from "react-redux";

import "../../styles/Footer.css";
import "../../styles/Header.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { RootState } from "../../typescript/redux/store/";
import MainPlayground from "../sections/playground/MainPlayground";

export default function Playground() {
  const { navClass } = useSelector((state: RootState) => state.navState);
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const pageBody = navClass + " " + lamp;
  return (
    <div className={pageBody}>
      <Header />
      <MainPlayground />
      <Footer />
    </div>
  );
}
