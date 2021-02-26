import './App.css';
import "./mobilefriendly.css"
import MainHeader from "./components/mainheader.js"
import BodyContainer from "./components/bodycontainer"
import MenuContainer from "./components/menucontainer"
import Nav from "./components/nav.js"
import ContactPg from "./components/contact"
import Gallery from "./components/gallery"
import Catering from "./components/catering"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <MainHeader />
      <BodyContainer />
      <MenuContainer />
      <Nav />
      <ContactPg />
      <Gallery />
      <Catering />
      <Footer />
    </div>
  );
}


export default App;
