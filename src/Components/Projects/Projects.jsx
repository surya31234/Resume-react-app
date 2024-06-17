
import './Projects.css'
import ProjectCard from './ProjectCard/ProjectCard'
import js from '../../assets/js.png'
import cpp from '../../assets/c-.png'
import gym from '../../assets/Gym.png'

export default function Projects(){
    const ProjectData=[
        {
            image:gym,
            title:'Gym Website',
            desc:[
                "Basic gym website"
            ],
            link:'https://github.com/Prashant1659/Gym_Website'
        }
        // {
        //     image:js,
        //     title:"JS",
        //     desc:[
        //         "Java Script"
        //     ],
        //     link:'https://www.google.co.in/'
        // },
        // {
        //     image:cpp,
        //     title:"C++",
        //     desc:[
        //         "C++ "
        //     ],
        //     link:'https://www.google.co.in/'
        // }
    ]
    return(
        <div className="projects_container" id='Projects'>
            <p className='project_title'>Projects</p>
            <div className="project_card_container">
            {ProjectData.map((project,index)=>(
                    <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    desc={project.desc}
                    link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}