import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from '../../components/Gallery';


function Works() {

    return (
      <section className = "works">
      <Navigation />
      <Header />
      <Gallery />
      <Footer />
      </section>
    )
}
 
export default Works