import NavBar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";


function Service () {
    return(
        <>
        <NavBar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        title="Service"
        btnClass="hide"
         />

        <Trip />
        <Footer/>

        </>
    )
}

export default Service;