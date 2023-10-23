import {useState} from "react";
import "./home.css";
import Invincible from "../../assets/Invincible.webp";
import fabious from "../../assets/fabious.jpg";
import sapphire from "../../assets/sapphire.webp";
import spectral from "../../assets/spectral.webp";
import pp1 from "../../assets/pp1.webp";
import pp2 from "../../assets/pp2.png";
import pp4 from "../../assets/pp4.jpeg";
import pp5 from "../../assets/pp5.webp";

const Home = () => {
    return(
        <div className="main"> 
            <header className="title">
                <h1>BOOSTER TEAM</h1>
            </header>

            <div className="team-info">
                <div className="desc">
                    <h1>
                        Meet our Warcraft Elite Boosters
                    </h1>
                    <h3>Dive into the World of Warcraft with our team of elite boosters, seasoned experts who've battled through Azeroth's toughest challenges. Whether you're seeking a challenging raid, elusive achievements, or rare mounts, the Warcraft Elite Boosters will elevate your gaming experience to legendary status.</h3>
                </div>
        
                <div className="pf-pics">
                    <ExamplePic source={Invincible} />
                    <ExamplePic source={fabious} />
                    <ExamplePic source={sapphire} />
                    <ExamplePic source={spectral} />

                </div>
            </div>

            <div className="reviews">
                <Review imgSource={pp1} review="Top-notch service! The boosters were professional and incredibly efficient. Felt like I had the Horde's finest warriors by my side. Highly recommend for anyone looking to level up their gameplay." rating="⭐⭐⭐⭐⭐" />
                <Review imgSource={pp2} review="A real game-changer! I was stuck on a raid for weeks, but with their help, I finally conquered it. The team not only assisted in boosting, but they also gave me tips and tricks for future encounters." rating="⭐⭐⭐⭐" />
                <Review imgSource={pp4} review="Five stars for sure! I've tried other boosting services before, but none match the expertise and speed of this team. It's clear they're genuine WoW enthusiasts who know the ins and outs of Azeroth." rating="⭐⭐⭐⭐⭐" />
                <Review imgSource={pp5} review="Quick, professional, and trustworthy! Was hesitant at first, but their boosters proved to be true champions of the Alliance. Will definitely be using their services again." rating="⭐⭐⭐⭐" />
                
            </div>
        </div>
    )
}

export default Home;





//*****************************Components******************************//
const Review = (props) => {
    return (
        <div className="rev">
            <img src={props.imgSource} alt="Review Avatar" />
            <h4>{props.review}</h4>
            <h1>{props.rating}</h1>
        </div>
    );
}


const ExamplePic = (props) =>{
    return( 
    <div className="pic">
        <img src={props.source} alt="#" />
</div>)
}

//********************************Components**************************//




