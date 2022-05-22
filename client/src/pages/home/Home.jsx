import FeaturedCities from "../../components/featuredCities/FeaturedCities"
import FeaturedPrice from "../../components/featuredPrice/FeaturedPrice"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import Property from "../../components/property/Property"
import "./home.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <h1 className="exploreFinland">Explore Finland</h1>
      <FeaturedCities/>
      <h1 className="homeTitle">Browse by property type</h1>
      <Property/>
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedPrice/>
      <div className="newsLetterContainer">
      <Newsletter/>
      </div>
      
    </div>
    </>
  )
}

export default Home