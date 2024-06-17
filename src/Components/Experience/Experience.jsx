
import './Experience.css'
import js from '../../assets/js.png'
import c from '../../assets/letter-c.png'
import cpp from '../../assets/c-.png'
import html from '../../assets/html-5.png'
import ExperienceCard from './ExperienceCard/ExperienceCard'
export default function Experience(){
    const ProjectData=[
        {
            image:c,
            title:'C',
            desc:[
                "C"
            ],
            link:'https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_Wasm'
        },
        {
            image:js,
            title:"JS",
            desc:[
                "Java Script"
            ],
            link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            image:cpp,
            title:"C++",
            desc:[
                "C++ "
            ],
            link:'https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_Wasm'
        },
        {
            image:html,
            title:"HTML",
            desc:[
                "HTML "
            ],
            link:'https://developer.mozilla.org/en-US/docs/Web/HTML'
        }
    ]
    return(
        <div className="experience_container" id='Experience'>
            <p className="experience_title">Experience</p>
            <div className="experience_card_box">
            {ProjectData.map((project,index)=>(
                    <ExperienceCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    // desc={project.desc}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}