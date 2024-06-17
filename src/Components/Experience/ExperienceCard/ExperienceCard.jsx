
import './ExperienceCard.css'

export default function ExperienceCard({image,title,link}){

    return(
        <div className="experience_card_container">
            <div className="card">
            <img src={image} alt="" />
            <span>{title}</span>
            {/* <p>{desc}</p> */}
            <span>Link</span>
            <a href={link} target='_blank'>For Ref.</a>
            </div>
        </div>
    )
}