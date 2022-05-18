import FeaturedCities from "../../components/featuredCities/FeaturedCities"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Property from "../../components/property/Property"
import "./home.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <FeaturedCities/>
      <h1 className="homeTitle">Browse by property types</h1>
      <Property/>
    </div>
    </>
  )
}

export default Home