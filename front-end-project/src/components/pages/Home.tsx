import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../sections/home/Main";
import "../../styles/Home.css";
import "../../styles/Footer.css";
import "../../styles/Header.css";
import "../../styles/Form.css";

export default function Home() {
  return (
    // TODO redux stuff
    <div className='wapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
