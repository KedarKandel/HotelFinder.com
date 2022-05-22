import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="newsletterHeading">Save time, save money!</h1>
      <p className="desc">Sign up and we'll send the best deals to you.</p>
      <div className="inputContainer">
        <input type="text" placeholder="Your Email here!" className="Input" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
