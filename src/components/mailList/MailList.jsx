import "./mailList.css";

const MailList = () => {
  return (
    <div className="m">
      <h1 className="mt">Save time, save money</h1>
      <span className="mDesc">Sign and we'll send the best deals to you</span>
      <div className="mIC">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
