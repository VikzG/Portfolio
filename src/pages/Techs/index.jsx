import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TechsGallery from '../../components/TechsGallery';


function Techs() {

    return (
      <section className = "techs">
      <Navigation />
      <Header />
      <TechsGallery/>
      <Footer />
      </section>
    )
}
 
export default Techs