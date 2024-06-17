
import './ProjecCard.css'

export default function ProjectCard({image,title,desc,link}){
    return(
        <div className="projectcard_container">
            <div className="cards">
            <img src={image} alt="" />
            <div className="cards_data">
            <p>Title : {title}</p>
            <p>Desc : {desc}</p>
            <span>Link : </span>
            <a href={link} target='_blank'>Source Code</a>
            </div>
            
            </div>
            
        </div>
    )
}