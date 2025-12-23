import profile_picture from "../../../images/registration_picture.png";
import mail from "../../../images/inputMail.png";
import lock from "../../../images/inputLock.png";
import AuthForm from "../../../components/AuthForm/AuthForm";

function LoginPage() {
  return (
    <AuthForm
      titleImage={profile_picture}
      buttonText="LOG IN"
      linkText="Don't have an account?"
      link="/register"
      pageLink='/dashboard'
      fields={[
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
        }
      ]}
    />
  );
}

export default LoginPage;
