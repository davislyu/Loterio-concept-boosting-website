import React from "react";
import "./Popup.css";
import img1 from "../../assets/popupImg.jpeg";
import wowLogo from "../../assets/world-of-warcraft.png";
import { TfiClose } from "react-icons/tfi";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <TfiClose />
        </button>
        {/* {props.children} */}
        <div className="pop-content">
          <div className="pop-img">
            <div className="pop-img-bg"></div>
            <img src={img1} alt="" />
          </div>

          <div className="pop-info">
            <div className="pop-logo">
              <img src={wowLogo} alt="logo" />
            </div>
            <div className="pop-title">
              <h1>Join the Loterio family</h1>
              <h3>Sign up for the latest news and discounts!</h3>
            </div>
            <div className="pop-form">
              <input type="text" placeholder="Enter your email here" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
