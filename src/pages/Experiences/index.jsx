import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ExpGallery from '../../components/ExpGallery';


function Experiences() {

    return (
      <section className = "experiences">
      <Navigation />
      <Header />
      <ExpGallery/>
      <Footer />
      </section>
    )
}
 
export default Experiences