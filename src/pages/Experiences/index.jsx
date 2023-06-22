import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExpGallery from '../../components/ExpGallery';


function Experiences() {

    return (
      <div className = "experiences">
      <Navigation />
      <Header />
      <ExpGallery/>
      <Footer />
      </div>
    )
}
 
export default Experiences