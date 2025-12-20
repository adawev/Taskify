import './LoginPage.scss'
import profile_picture from '../../../images/registration_picture.png'
import mail from '../../../images/inputMail.png'
import lock from '../../../images/inputLock.png'
import {Link} from "react-router-dom";
function LoginPage() {
  return (
    <div className="LoginPage ">
      <div className="form_cont">
        <img src={profile_picture} alt="" className='profile_picture'/>
        <form action="">
<div>
           <div className='Email_cont position_label'>
            <img src={mail} alt="" className='position_picture'/>
            <input type="email" placeholder='Email ID'/>
         </div>
         <div className='Password position_label'>  
            <img src={lock} alt="" className='position_picture'/>
            <input type="password" placeholder='Password'/>
         </div>
</div>
          <button type="submit" className='submit_button'>
            LOG IN
          </button>
          <Link to='/register'>Dont have an account?</Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
