import Nav from "../../components/nav"
import Music from "../../images/music.svg";
import Health from "../../images/health.svg";
import Family from "../../images/family.svg";
import Travel from "../../images/travel.svg";
import Technology from "../../images/technology.svg";
import Food from "../../images/food.svg";
import Education from "../../images/education.svg";
import Automobile from "../../images/automobile.svg";
import Business from "../../images/business.svg";
import Finance from "../../images/finance.svg";





type cardProps = {
  img: string,
  title: string
}
const styles = {
  cardContainer: {
    maxWidth: "800px",
    margin: "80px auto",
    border: "1px solid white"
  },
  card: {
    width: "160px",
    height: "132px",
    borderRadius: "20px",
    boxShadow: "1px 5px 5px 7px rgba(83,133,6,0.18)"
  }

}
const RecommendationCard = ({img, title}: cardProps) =>{
  return <figure style={styles.card} className="d-inline-flex flex-column mx-auto my-4 align-items-center">
      <img className="mt-auto" src={img} />
    <figcaption className="mb-auto mt-3">{title}</figcaption>
  </figure>
}


const Recomendations = () =>{
  return (
    <div className="container">

      <Nav />
      <main style={styles.cardContainer}>
        <h2 className="text-center">What would you like to see?</h2>
        <p className="text-center mt-3 mb-4">Select the type of content you would like to see on your profile.</p>

        <div className="d-flex flex-wrap">
          <RecommendationCard img={Music} title="Music" />
          <RecommendationCard img={Health} title="Health & Fitness" />
          <RecommendationCard img={Family} title="Family" />
          <RecommendationCard img={Travel} title="Travel" />
          <RecommendationCard img={Technology} title="Technology" />
          <RecommendationCard img={Food} title="Food" />
          <RecommendationCard img={Education} title="Education" />
          <RecommendationCard img={Travel} title="Travel" />
          <RecommendationCard img={Automobile} title="Automobile" />
          <RecommendationCard img={Business} title="Business" />
          <RecommendationCard img={Finance} title="Finance" />
          <RecommendationCard img={Travel} title="Travel" />
        </div>

        <button className="btn btnGreen w-100 d-flex align-items-center justify-content-center mt-5">Continue &rarr;</button>
      </main>

    </div>
  )
}

export default Recomendations