import { useSelector } from "react-redux";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../sections/home/Main";
import "../../styles/Footer.css";
import "../../styles/Header.css";
import { RootState } from "../../typescript/redux/store/";

export default function Home() {
  const { navClass } = useSelector((state: RootState) => state.navState);
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const pageBody = navClass + " " + lamp;
  console.log(pageBody);
  return (
    <div className={pageBody}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
