import NavBar from "../components/Navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home () {
    return(
        <>
        <NavBar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Change your Style Change your Life"
        text="¡New Year, New Gear!"
        buttonText="Click Here"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer/>

        </>
    )
}

export default Home;