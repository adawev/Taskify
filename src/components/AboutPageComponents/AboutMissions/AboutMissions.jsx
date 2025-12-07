import './style.scss'

function AboutMissions({data}) {
  return (
    <section className='AboutMissions'>
        {
            data.map((i,index)=>(
                <div  key={index} 
      className={`missions mx-auto ${index === 0 ? "small" : ""}`}>
                    <h1>{i.h1}</h1>
                    <span>{i.text}</span>
                </div>
            ))
        }
     
    </section>
  )
}

export default AboutMissions
