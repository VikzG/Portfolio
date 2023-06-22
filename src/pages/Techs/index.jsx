import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TechsGallery from '../../components/TechsGallery';


function Techs() {

    return (
      <div className = "technos">
      <Navigation />
      <Header />
      <TechsGallery/>
      <Footer />
      </div>
    )
}
 
export default Techs