import "./contact.css";

const Contact = () => {
  return (
    <div className="main">
      <div className="contactUsMain">
        <div className="contactInfo">
          <h1>Contact Us</h1>
          <p>
            At Loterio, we're committed to enhancing your World of Warcraft
            experience. Whether you're striving for raid success, chasing that
            elusive PvP title, or exploring the vast landscapes of Azeroth,
            we're here to give you a boost. Have Questions or Concerns? Reach
            out to us! Whether you're curious about our services, have concerns
            about an ongoing boost, or just want to chat about WoW, we're here
            for you.
          </p>
        </div>
        <div action="#" className="contactUser">
          <div className="contactMain">
            <div className="firstLast">
              <div className="firstName">
                <h3>First name</h3>
                <input type="text" className="name" />
              </div>
              <div className="surname">
                <h3>Last name</h3>
                <input type="text" className="sur" />
              </div>
            </div>

            <div className="email">
              <h3>Email</h3>
              <input type="text" className="mail" />
            </div>
            <div className="helpWith">
              <h3>What can we help you with </h3>
              <textarea className="help" rows="4"></textarea>
            </div>

            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
