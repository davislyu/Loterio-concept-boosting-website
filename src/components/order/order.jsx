import { useState, useEffect } from "react";
import "./order.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import goldPic from "../../assets/order/gold.jpeg";
import dragonFlight from "../../assets/order/dragonFlight.webp";
import pinkNpc from "../../assets/order/npcPink.webp";
import redDragon from "../../assets/order/redDragon.webp";
import levelBoost from "../../assets/order/levelBoosting.webp";
import blueDragon from "../../assets/order/blueDragon.webp";
import Popup from "../Popup/Popup";

const Order = () => {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const toggleHidden = () => {
      setTimedPopup(true);
    };
    const timeOutId = setTimeout(toggleHidden, 3000);
  }, []);
  return (
    <div className="order-main">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />

      <header className="order-header">
        <h1 className="order-header-title">WoW Boosting</h1>
        <p className="order-header-desc   ">
          Overgear provides cheap WoW boosting of all types: character or PvP
          boosting, Raid or Dungeon carry, Powerleveling, farming & more to save
          your time. Buy WoW carry, book a slot in our live chat and enjoy your
          WoW boost! Online support will provide you with all the details about
          our WoW services 24/7.
        </p>
      </header>
      <div className="order-choices">
        <ChoiceNormal
          picUrl={goldPic}
          title="WoW Gold"
          desc="Buy WoW Gold, any amount of gold on Each Realm in Stock. More than 100,000 positive reviews. Delivery time in most cases is less than 15 minutes, depending on Realm."
          price={15.0}
        />
        <ChoiceList
          picUrl={dragonFlight}
          title="Prepare for Dragon Flight patch 12.2"
          op1="Grab seasonal rewards"
          op2="Achivments,Mounts,Titles"
          op3="Customize your order"
          price={34}
        />
        <ChoiceTimes
          picUrl={pinkNpc}
          title="atSC Heroic Plus Bonus Mythic+ Run"
          time1="11:00"
          time2="14:00"
          time3="17:00"
          time4="21:45"
          price="45"
        />
        <ChoiceTimes
          picUrl={redDragon}
          title="Aberrus Heroic"
          time1="11:00"
          time2="14:00"
          time3="17:00"
          time4="21:45"
          price="49"
        />
        <ChoiceList
          picUrl={levelBoost}
          title="Power Leveling"
          op1="Fastest leveling options"
          op2="Choose any level range"
          op3="AFK leveling as an option"
          price="90"
        />
        <ChoiceList
          picUrl={blueDragon}
          title="Dawn of the infinite"
          op1="Heroic and Mythic 0+"
          op2="Up to 3 loot traders"
          op3="Immortal run as an option"
          price="109"
        />
      </div>
    </div>
  );
};
export default Order;

//*******Choice-card******** */
const ChoiceNormal = (props) => {
  return (
    <div
      className="choice-card"
      style={{
        backgroundImage: `
        linear-gradient(to top, #047382 10%, #0000006a 100%),
        url(${props.picUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="normal-choice-card-header">
        <h1 className="normal-choice-card-title card-title">{props.title}</h1>
        <p className="normal-choice-card-desc">{props.desc}</p>
      </div>
      <div className="price">
        <Price price={props.price} />
      </div>
    </div>
  );
};
//*******Choice-card******** */
const ChoiceList = (props) => {
  return (
    <div
      className="choice-card"
      style={{
        backgroundImage: `
    linear-gradient(to top, #047382 10%, #0000006a 100%)
    , 
    url(${props.picUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {" "}
      <div className="list-choice-card-header">
        <h1 className="card-title">{props.title}</h1>
      </div>
      <div className="list-choice-card-options-div">
        <ul className="list-choice-card-L">
          <li className="list-option">✤ {props.op1}</li>
          <li className="list-option">✤ {props.op2}</li>
          <li className="list-option">✤ {props.op3}</li>
        </ul>
      </div>
      <div className="price">
        {" "}
        {/* Added this div */}
        <Price price={props.price} />
      </div>
    </div>
  );
};

//*******Choice-card******** */

const ChoiceTimes = (props) => {
  return (
    <div
      className="choice-card"
      style={{
        backgroundImage: `
    linear-gradient(to top, #047382 10%, #0000006a 100%)
    , 
    url(${props.picUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="times-choice-card-header">
        <div className="times-title">
          <h1 className="card-title">{props.title}</h1>
        </div>
        <h3 className="next-msg">Next raids at: </h3>
        <div className="raid-times">
          <a href="#" className="raidTime">
            {props.time1}
          </a>
          <a href="#" className="raidTime">
            {props.time2}
          </a>
          <a href="#" className="raidTime">
            {props.time3}
          </a>
          <a href="#" className="raidTime">
            {props.time4}
          </a>
        </div>
      </div>
      <h4>find more runs inside</h4>
      <div className="price">
        {" "}
        <Price price={props.price} />
      </div>
    </div>
  );
};

//*******Choice-card******** */

//*******Price******** */

const Price = (props) => {
  return (
    <div className="price-main">
      <div className="price-info">
        <h2 className="from">FROM</h2>
        <div className="price">${props.price}.00</div>
      </div>
      <div className="price-icon">
        <a href="#">
          <BsFillArrowRightSquareFill />
        </a>
      </div>
    </div>
  );
};
//*******Price******** */
