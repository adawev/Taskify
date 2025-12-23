import profile_picture from "../../../images/registration_picture.png";
import username from "../../../images/username.png";
import mail from "../../../images/inputMail.png";
import lock from "../../../images/inputLock.png";
import AuthForm from "../../../components/AuthForm/AuthForm";

function RegisterPage() {
  return (
    <AuthForm
      titleImage={profile_picture}
      buttonText="REGISTER"
      linkText="Already have an account?"
      link="/login"
      pageLink='/dashboard'
      fields={[
         {
          type: "text",
          placeholder: "Name",
          icon: username,
          className: "Password"
        },
 
        {
          type: "email",
          placeholder: "Email ID",
          icon: mail,
          className: "Email_cont"
        },
        {
          type: "password",
          placeholder: "Password",
          icon: lock,
          className: "Password"
        },
        {
          type: "password",
          placeholder: "Confirm password",
          icon: lock,
          className: "Password"
        },
      ]}
    />
  );
}

export default RegisterPage;
