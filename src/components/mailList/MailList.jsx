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
      <div className="link">
        <input type="checkbox" />
        <label>Send me a link to get the FREE Booking.com app!</label>
      </div>
    </div>
  );
};

export default MailList;
