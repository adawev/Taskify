import { Link } from "react-router-dom";
import "./style.scss";
function AuthForm({ titleImage, fields, buttonText, linkText, link, pageLink }) {
  return (
    <div className="LoginPage">
      <div className="form_cont">
        <img src={titleImage} alt="" className="profile_picture" />
        <form>
          <div>
            {fields.map((field, index) => (
              <div key={index} className={`${field.className} position_label`}>
                <img src={field.icon} alt="" className="position_picture" />
                <input type={field.type} placeholder={field.placeholder} />
              </div>
            ))}
          </div>
          <button to={pageLink} type="submit" className="submit_button">
            {buttonText}
          </button>
          <Link to={link}>{linkText}</Link>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
