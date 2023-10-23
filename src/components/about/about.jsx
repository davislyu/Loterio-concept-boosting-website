import "./about.css"
import teens from "../../assets/threeTeens.png";
const About = () => {
    return(
        <div className="main-about"> 

            <div className="about-mainSec">
            <div className="aboutUs-desc">
            <h1 className="aboutUs-desc-title" >Our story</h1>
            <p className="aboutUs-desc-paragraph" >"In the sprawling realms of Azeroth, where many have ventured but few have truly left a mark, a tale began that is now whispered in awe across the continents. Jacob, a strategist with an eye for detail; Liam, the fearless warrior with hands that could conjure miracles; and Mia, the charismatic mage whose wisdom bound the trio, were more than just avid players.
                They were childhood friends, brought together by fate and united by a shared dream. Their countless hours diving into the rich lore, navigating treacherous dungeons, and mastering intricate raid strategies were fueled by a singular vision: to ascend the ranks and be recognized as the world's premier World of Warcraft boosters.</p>
            <p className="aboutUs-desc-paragraph" >As the years passed, the stories of their legendary conquests spread like wildfire. From the icy peaks of Northrend to the scorching dunes of Tanaris, no challenge was too great, no enemy too formidable. But it wasn't just their in-game prowess that made them stand out. Their bond, the very essence of their strength, was evident in every battle they fought and every strategy they crafted.
                They approached every player they assisted not just as clients, but as fellow adventurers, imparting not just skills, but also the essence of true teamwork.</p>
            <p className="aboutUs-desc-paragraph" >journey was not without its trials. Real-life challenges threatened to divert their paths, yet with each hurdle, their resolve only grew stronger. They realized that their ambition was not just about personal glory, but about creating a legacy, a beacon for all WoW enthusiasts looking for guidance, inspiration, and camaraderie. Today, they are more than just boosters. They are mentors, influencers, and above all, living legends in the World of Warcraft community. Their tale is a testament to the power of friendship, the allure of a shared dream, and the magic that happens when both come together. As you join hands with them, you're not just getting a boost; you're becoming part of a rich tapestry of adventures, tales, and memories."</p>
            </div>
            <img className="teen-img" src={teens} alt="" />
            </div>
        
        </div>
    )
}

export default About