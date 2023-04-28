import NavBar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About () {
    return(
        <>
        <NavBar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="About"
        btnClass="hide"
         />
        <AboutUs />
        <Footer/>
        </>
    )
}

export default About;