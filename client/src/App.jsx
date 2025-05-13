import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Certifications from "./sections/Certifications"
import DownloadButton from "./components/DownloadButton"
import Contact from "./sections/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./sections/Footer"

const App = () => {

  return (
    <>
    <ToastContainer 
    position="top-center"
    autoClose={4000}
    hideProgressBar
    closeOnClick
    pauseOnHover
    draggable
    closeButton={false}
    toastClassName={({ type }) =>
      'bg-transparent shadow-none p-0 pointer-events-none'
    }
    bodyClassName={() => 'p-0 m-0'}
    />
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Certifications/>
    <DownloadButton/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
