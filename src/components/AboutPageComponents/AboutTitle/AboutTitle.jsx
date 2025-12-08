import './style.scss'
import mail_svg from '../../../images/aboutPageImages/mail_svg.png'
import phone from '../../../images/aboutPageImages/phone_svg.png'
import github_mark from '../../../images/aboutPageImages/github-mark.png'
function AboutTitle({about_title_data}) {

  return (
    <section className="AboutTitle">
      <h1>TITLE OF THE PAGE</h1>

      <div className="titles">
          {about_title_data.map((i,index)=> (

          <div className="card_about" key={index}>
            <div className="title_image mx-auto"><img src={i.image} alt="" /></div>

            <p>{i.name}</p>
            <span>{i.sphere}</span>

            <div className="social_medias">
              <div className="media"  onClick={() => navigator.clipboard.writeText(i.phoneNum)} ><img src={phone} alt=""/></div>
              <div className="media" onClick={() => window.open(i.telegram, "_blank")}><img src={mail_svg} alt=""/></div>
              <div className="media" onClick={() => window.open(i.github_link, "_blank")}><img src={github_mark} alt=""/></div>
            </div>
          </div>
          ))}

      </div>

    </section>
  )
}

export default AboutTitle
