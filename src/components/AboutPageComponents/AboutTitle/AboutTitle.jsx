import './style.scss'
import mail_svg from '../../../images/aboutPageImages/mail_svg.png'
function AboutTitle({about_title_data}) {
  return (
    <section className="AboutTitle">
      <h1>TITLE OF THE PAGE</h1>

      <div className="titles">
          {about_title_data.map((i,index)=> (

          <div className="card_about" key={index}>
            <div className="title_image"></div>

            <p>{i.name}</p>
            <span>{i.sphere}</span>

            <div className="social_medias">
              <div className="media"><img src={mail_svg} alt=""/></div>
              <div className="media"><img src={mail_svg} alt=""/></div>
              <div className="media"><img src={mail_svg} alt=""/></div>
            </div>
          </div>
          ))}

      </div>

    </section>
  )
}

export default AboutTitle
